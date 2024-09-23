import {StyleSheet, Text, View} from 'react-native';
import {Icon, useTheme} from 'react-native-paper';

type EmptyScreenProps = {
  message?: string;
  iconName?: string;
};

const EmptyScreen = ({message, iconName}: EmptyScreenProps) => {
  const theme = useTheme();
  const styles = getStyles(theme.colors.primary);

  return (
    <View style={[styles.container]}>
      {iconName ? <Icon source={iconName} size={50} /> : null}

      <Text style={styles.message}>
        {message ? message : 'Life is Beautiful'}
      </Text>
    </View>
  );
};

export default EmptyScreen;

const getStyles = (messageTextColor: string) =>
  StyleSheet.create({
    container: {
      flex: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    message: {
      fontSize: 20,
      marginVertical: 50,
      color: messageTextColor,
    },
  });
