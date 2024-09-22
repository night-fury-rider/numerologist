import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Badge} from 'react-native-paper';

import {
  getNumericSumValue,
  getNumerologyValue,
} from '$dashboard/DashboardService';
import TextInput from '$common/components/TextInput';
import Text from '$common/components/Text';
import {isValidName} from 'common/services/UtilService';

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
            label="First Name"
            value={firstName}
            handleChange={newName => {
              handleNameChange(`firstName`, newName);
            }}
            style={styles.nameField}
          />
          <Badge style={styles.scoreField} size={40}>
            {firstNameWeight}
          </Badge>
        </View>
        <View style={styles.row}>
          <TextInput
            label="Middle Name"
            value={middleName}
            handleChange={newName => {
              handleNameChange(`middleName`, newName);
            }}
            style={styles.nameField}
          />
          <Badge style={styles.scoreField} size={40}>
            {middleNameWeight}
          </Badge>
        </View>
        <View style={styles.row}>
          <TextInput
            label="Last Name"
            value={lastName}
            handleChange={newName => {
              handleNameChange(`lastName`, newName);
            }}
            style={styles.nameField}
          />
          <Badge style={styles.scoreField} size={40}>
            {lastNameWeight}
          </Badge>
        </View>
      </View>
      <View style={[styles.row, styles.resultRow]}>
        <Text title="Result: " variant="headlineLarge" />
        <Text title={result} variant="headlineLarge" />
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
  nameField: {
    flexGrow: 2,
  },
  scoreField: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultRow: {
    marginBottom: 30,
  },
});

export default DashboardScreen;
