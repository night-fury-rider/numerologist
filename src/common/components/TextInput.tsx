import {TextInput as LibraryTextInput} from 'react-native-paper';
import {InputModeOptions, StyleSheet} from 'react-native';

type TextInputProps = {
  label: string;
  contentStyle?: object;
  inputMode?: InputModeOptions;
  style?: object;
  value?: string;
  handleChange?: (text: string) => void;
};

const TextInput = ({
  label,
  contentStyle = {},
  inputMode,
  style,
  value,
  handleChange,
}: TextInputProps) => {
  return (
    <LibraryTextInput
      label={label}
      value={value}
      style={[styles.input, style]}
      contentStyle={contentStyle}
      onChangeText={text => handleChange?.(text)}
      inputMode={inputMode ? inputMode : 'text'}
    />
  );
};

const styles = StyleSheet.create({
  input: {},
});

export default TextInput;
