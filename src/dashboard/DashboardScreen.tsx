import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

import {
  getNumericSumValue,
  getNumerologyValue,
} from '$dashboard/DashboardService';
import TextInput from '$common/components/AlphabetInput';
import Badge from '$common/components/Badge';
import {DASHBOARD} from '$common/constants/strings.constants';
import {isValidName} from '$common/services/UtilService';

// TODO: Use specific type instead of any
const DashboardScreen = ({navigation}: any) => {
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 25,
    marginTop: 30,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10,
    marginHorizontal: 10,
  },
  nameField: {},
  scoreField: {},
  resultRow: {
    marginBottom: 30,
  },

  resultContainer: {
    padding: 16,
    backgroundColor: '#f8f9fa', // TODO: Yuvraj Get it from color constants
  },
  card: {
    borderRadius: 8,
    elevation: 3,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // TODO: Yuvraj Get it from color constants
    textAlign: 'center',
  },
  data: {
    fontWeight: 'bold',
    color: '#6200ee', // TODO: Yuvraj Get it from color constants
    marginVertical: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666', // TODO: Yuvraj Get it from color constants
    textAlign: 'center',
  },
});

export default DashboardScreen;
