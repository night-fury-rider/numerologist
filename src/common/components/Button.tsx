import {Button as LibraryButton} from 'react-native';
import {GestureResponderEvent, StyleSheet} from 'react-native';

type ButtonProps = {
  title: string;
  buttonStyle?: object;
  titleStyle?: object;
  handlePress?: (event: GestureResponderEvent) => void;
};

const Button = ({
  title,
  buttonStyle = {},
  handlePress,
  titleStyle = {},
}: ButtonProps) => {
  return (
    <LibraryButton
      onPress={handlePress}
      title={title}
      buttonStyle={[styles.button, buttonStyle]}
      titleStyle={titleStyle}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});

export default Button;
