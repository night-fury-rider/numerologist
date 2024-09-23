import {Badge as LibraryBadge, useTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

type BadgeProps = {
  value: string | number;
};

const Badge = ({value}: BadgeProps) => {
  const theme = useTheme();
  const styles = getStyles(theme.colors.primary);
  return (
    <View style={styles.container}>
      <LibraryBadge style={styles.badge} size={40}>
        {value}
      </LibraryBadge>
    </View>
  );
};

const getStyles = (badgeBackgroundColor: string) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    badge: {
      backgroundColor: badgeBackgroundColor,
      fontSize: 16,
    },
  });

export default Badge;
