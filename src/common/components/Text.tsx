import {Text as LibraryText} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {VariantProp} from 'react-native-paper/lib/typescript/components/Typography/types';

type TextInputProps = {
  title: string;
  variant?: VariantProp<never>;
  customStyle?: object;
};

const Text = ({title, variant, customStyle}: TextInputProps) => {
  return (
    <LibraryText
      variant={variant || 'titleMedium'}
      style={[customStyle, styles.text]}>
      {title}
    </LibraryText>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default Text;
