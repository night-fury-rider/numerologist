import {Badge as LibraryBadge} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

type BadgeProps = {
  value: string | number;
};

const Badge = ({value}: BadgeProps) => {
  return (
    <View style={styles.container}>
      <LibraryBadge style={styles.badge} size={40}>
        {value}
      </LibraryBadge>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#red',
  },
  badge: {
    backgroundColor: '#6200ea',
    fontSize: 16,
  },
});

export default Badge;
