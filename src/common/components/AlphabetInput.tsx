import {TextInput as LibraryTextInput} from 'react-native-paper';
import {InputModeOptions, StyleSheet} from 'react-native';
import {View} from 'react-native';

type AlphabetInputProps = {
  label: string;
  contentStyle?: object;
  inputMode?: InputModeOptions;
  style?: object;
  value?: string;
  handleChange?: (text: string) => void;
};

const AlphabetInput = ({
  label,
  contentStyle = {},
  inputMode,
  style,
  value,
  handleChange,
}: AlphabetInputProps) => {
  return (
    <View style={styles.container}>
      <LibraryTextInput
        label={label}
        value={value}
        mode="outlined"
        style={[styles.input, style]}
        theme={{
          colors: {
            primary: '#6200ea', // TODO: Yuvraj get these inline colors to theme file
            text: '#000',
          },
        }}
        contentStyle={contentStyle}
        onChangeText={text => handleChange?.(text)}
        inputMode={inputMode ? inputMode : 'text'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 56,
    backgroundColor: '#ffffff',
  },
});

export default AlphabetInput;
