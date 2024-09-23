import {TextInput as LibraryTextInput, useTheme} from 'react-native-paper';
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
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <LibraryTextInput
        label={label}
        value={value}
        mode="outlined"
        style={[styles.input, style]}
        theme={{
          colors: {
            primary: theme.colors.primary,
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
  },
});

export default AlphabetInput;
