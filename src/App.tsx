import React from 'react';
import {BottomNavigation, useTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ErrorBoundary from '$common/components/ErrorBoundary';
import StorageService from '$common/services/StorageService';
import DashboardScreen from '$dashboard/DashboardScreen';
import BirthdayScreen from '$birthday/BirthdayScreen';
import SettingsScreen from '$settings/SettingsScreen';

StorageService.init();

function App() {
  const theme = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'dashboard',
      title: 'Name',
      focusedIcon: 'account-outline',
      unfocusedIcon: 'account-outline',
    },
    {
      key: 'birthday',
      title: 'Birthday',
      focusedIcon: 'cake-variant-outline',
      unfocusedIcon: 'cake-variant-outline',
    },
    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: 'wrench',
      unfocusedIcon: 'wrench-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardScreen,
    birthday: BirthdayScreen,
    settings: SettingsScreen,
  });

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={{
            backgroundColor: theme.dark
              ? theme.colors.inverseOnSurface
              : theme.colors.primaryContainer,
          }}
          activeIndicatorStyle={{
            backgroundColor: theme.dark
              ? theme.colors.surface
              : theme.colors.onPrimary,
          }}
        />
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
export default App;
