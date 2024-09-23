import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, useTheme} from 'react-native-paper';

import TextInput from '$common/components/AlphabetInput';
import Badge from '$common/components/Badge';
import {COLORS} from '$common/constants/colors.constants';
import {DASHBOARD} from '$common/constants/strings.constants';
import {isValidName} from '$common/services/UtilService';
import {
  getNumericSumValue,
  getNumerologyValue,
} from '$dashboard/DashboardService';

// TODO: Use specific type instead of any
const DashboardScreen = ({navigation}: any) => {
  const theme = useTheme();

  const [firstName, setFirstName] = useState('');
  const [firstNameWeight, setFirstNameWeight] = useState(0);
  const [middleName, setMiddleName] = useState('');
  const [middleNameWeight, setMiddleNameWeight] = useState(0);
  const [lastName, setLastName] = useState('');
  const [lastNameWeight, setLastNameWeight] = useState(0);

  const [result, setResult] = useState('0');

  useEffect(() => {
    let newWeight = getNumerologyValue(firstName);
    setFirstNameWeight(newWeight);
    setResult(
      `${
        getNumericSumValue(newWeight) +
        getNumericSumValue(middleNameWeight) +
        getNumericSumValue(lastNameWeight)
      }`,
    );
  }, [firstName]);

  useEffect(() => {
    let newWeight = getNumerologyValue(middleName);
    setMiddleNameWeight(newWeight);
    setResult(
      `${
        getNumericSumValue(firstNameWeight) +
        getNumericSumValue(newWeight) +
        getNumericSumValue(lastNameWeight)
      }`,
    );
  }, [middleName]);

  useEffect(() => {
    let newWeight = getNumerologyValue(lastName);
    setLastNameWeight(newWeight);
    setResult(
      `${
        getNumericSumValue(firstNameWeight) +
        getNumericSumValue(middleNameWeight) +
        getNumericSumValue(newWeight)
      }`,
    );
  }, [lastName]);

  const handleNameChange = (nameType: string, newName: string) => {
    if (!isValidName(newName)) {
      return;
    }

    switch (nameType) {
      case 'firstName':
        setFirstName(newName);
        break;

      case 'middleName':
        setMiddleName(newName);
        break;

      default:
        setLastName(newName);
        break;
    }
  };

  const styles = getStyles(
    theme.colors.secondaryContainer,
    theme.colors.secondary,
    COLORS.purpleA400,
    theme.colors.secondary,
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            label={DASHBOARD.firstName.label}
            value={firstName}
            handleChange={newName => {
              handleNameChange(`firstName`, newName);
            }}
            style={styles.nameField}
          />
          <Badge value={firstNameWeight} />
        </View>
        <View style={styles.row}>
          <TextInput
            label={DASHBOARD.middleName.label}
            value={middleName}
            handleChange={newName => {
              handleNameChange(`middleName`, newName);
            }}
            style={styles.nameField}
          />
          <Badge value={middleNameWeight} />
        </View>
        <View style={styles.row}>
          <TextInput
            label={DASHBOARD.lastName.label}
            value={lastName}
            handleChange={newName => {
              handleNameChange(`lastName`, newName);
            }}
            style={styles.nameField}
          />
          <Badge value={lastNameWeight} />
        </View>
        <View style={styles.resultContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>{DASHBOARD.result.label}</Text>
              <Text style={styles.data} variant="displayLarge">
                {result}
              </Text>
              <Text style={styles.subtitle}>
                {DASHBOARD.result.subtitle + ' '}
                {getNumericSumValue(firstNameWeight)}+
                {getNumericSumValue(middleNameWeight)}+
                {getNumericSumValue(lastNameWeight)}
              </Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </>
  );
};

const getStyles = (
  resultContainerBackgroundColor: string,
  resultTitleBackgroundColor: string,
  resultDataBackgroundColor: string,
  resultSubtitleBackgroundColor: string,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
      rowGap: 25,
    },
    row: {
      alignItems: 'center',
      columnGap: 10,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      marginHorizontal: 10,
    },
    nameField: {},
    scoreField: {},
    resultRow: {
      marginBottom: 30,
    },
    resultContainer: {
      backgroundColor: resultContainerBackgroundColor,
      padding: 16,
    },
    card: {
      borderRadius: 8,
      elevation: 3,
      padding: 16,
    },
    title: {
      color: resultTitleBackgroundColor,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    data: {
      color: resultDataBackgroundColor,
      fontWeight: 'bold',
      marginVertical: 8,
      textAlign: 'center',
    },
    subtitle: {
      color: resultSubtitleBackgroundColor,
      fontSize: 14,
      textAlign: 'center',
    },
  });

export default DashboardScreen;
