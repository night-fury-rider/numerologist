import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import EmptyScreen from '$common/components/EmptyScreen';
import {DASHBOARD} from '$common/constants/strings.constants';
import {useAppSelector} from '$common/redux/redux.hooks';
import {TContact} from '$dashboard/dashboard.types';

// TODO: Use specific type instead of any
const DashboardScreen = ({navigation}: any) => {
  const filteredContacts = useAppSelector(
    state => state.dashboard.filteredContacts,
  );

  const allContacts = useAppSelector(state => state.dashboard.contacts);

  const renderItem = (contactObj: TContact) => {
    return <View></View>;
  };

  return (
    <>
      {!filteredContacts || filteredContacts?.length === 0 ? (
        <EmptyScreen
          message={
            allContacts?.length === 0
              ? DASHBOARD.emptyMsg
              : DASHBOARD.searchBox.noResults
          }
          iconName="phone-outline"
        />
      ) : null}
      <View style={{flex: 1}}>
        <FlatList
          data={filteredContacts}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  contactAvatar: {
    width: 35,
    height: 35,
  },
});

export default DashboardScreen;
