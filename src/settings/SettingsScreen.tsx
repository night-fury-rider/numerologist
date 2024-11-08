import React from 'react';
import {View, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Card, Text, IconButton, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {SETTINGS} from '$common/constants/strings.constants';

const SettingsScreen: React.FC = () => {
  return (
    <Provider>
      <View style={styles.container}>
        {/* App Version Row */}
        <Card style={styles.row}>
          <View style={styles.rowContent}>
            <IconButton
              icon={() => <Icon name="information" size={24} color="#6200ee" />}
              onPress={() => {}}
              style={styles.iconButton}
            />
            <Text style={styles.rowText}>{SETTINGS.appVersion}</Text>
            <Text style={styles.rowText}>{DeviceInfo.getVersion()}</Text>
          </View>
        </Card>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  appbar: {
    backgroundColor: '#6200ee', // AppBar background color
    elevation: 4, // Add elevation for shadow effect
  },
  appbarTitle: {
    fontSize: 20, // Increase title font size
    fontWeight: 'bold', // Make the title bold
    color: '#ffffff', // Change title color to white
  },
  row: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: '#ffffff',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
  iconButton: {
    padding: 0,
  },
});

export default SettingsScreen;
