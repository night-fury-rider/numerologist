import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {BIRTHDAY} from '$common/constants/strings.constants';

interface DateRowProps {
  dateStr: string; // Date string for display
  onChangeDate: () => void; // Function to change date
}

const DateRow: React.FC<DateRowProps> = ({dateStr, onChangeDate}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        {/* Left Icon */}
        <IconButton
          icon={() => <Icon name="calendar" size={30} color="#6200ee" />}
          onPress={onChangeDate}
          style={styles.iconButton}
        />

        {/* Date Text */}
        <Text style={styles.dateText} onPress={onChangeDate}>
          {dateStr || BIRTHDAY.changeDate}
        </Text>

        {/* Right Icon */}
        <IconButton
          icon={() => <Icon name="chevron-right" size={30} color="#6200ee" />}
          onPress={onChangeDate}
          style={styles.iconButton}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 26,
    color: '#333',
  },
  iconButton: {
    padding: 0,
  },
});

export default DateRow;
