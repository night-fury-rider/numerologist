import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Divider, Text, useTheme} from 'react-native-paper';

import TextInput from '$common/components/AlphabetInput';
import Badge from '$common/components/Badge';
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

  const styles = getStyles(theme);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{DASHBOARD.title.label}</Text>
        <Text style={styles.headerSubtitle}>{DASHBOARD.instruction.label}</Text>
      </View>

      {/* Input Card */}
      <Card style={styles.inputCard} mode="elevated">
        <Card.Content style={styles.inputCardContent}>
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

          <Divider style={styles.divider} />

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

          <Divider style={styles.divider} />

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
        </Card.Content>
      </Card>

      {/* Result Card */}
      <Card style={styles.resultCard} mode="elevated">
        <Card.Content style={styles.resultCardContent}>
          <Text style={styles.resultLabel}>{DASHBOARD.result.label}</Text>

          <View style={styles.resultBadge}>
            <Text style={styles.resultNumber} variant="displayLarge">
              {result}
            </Text>
          </View>

          <Text style={styles.resultFormula}>
            {DASHBOARD.result.subtitle + ' '}
            {getNumericSumValue(firstNameWeight)} +{' '}
            {getNumericSumValue(middleNameWeight)} +{' '}
            {getNumericSumValue(lastNameWeight)}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const getStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.colors.background1,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingTop: 32,
      paddingBottom: 40,
      rowGap: 20,
    },

    header: {
      rowGap: 4,
      marginBottom: 4,
    },
    headerTitle: {
      fontSize: 26,
      fontWeight: '700',
      color: theme.colors.text1,
    },
    headerSubtitle: {
      fontSize: 14,
      color: theme.colors.text1,
      opacity: 0.6,
    },

    inputCard: {
      borderRadius: 20,
      backgroundColor: theme.colors.background7,
    },
    inputCardContent: {
      paddingVertical: 8,
    },
    divider: {
      backgroundColor: theme.colors.background4,
      marginVertical: 4,
    },

    row: {
      alignItems: 'center',
      columnGap: 12,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingVertical: 10,
    },
    nameField: {
      flex: 1,
    },
    scoreField: {},

    resultCard: {
      borderRadius: 24,
      backgroundColor: theme.colors.background5,
      elevation: 4,
    },
    resultCardContent: {
      alignItems: 'center',
      paddingVertical: 28,
      rowGap: 14,
    },
    resultLabel: {
      fontSize: 15,
      fontWeight: '600',
      letterSpacing: 0.5,
      textTransform: 'uppercase',
      color: theme.colors.onPrimary,
      opacity: 0.85,
    },
    resultBadge: {
      backgroundColor: theme.colors.onPrimary,
      borderRadius: 100,
      width: 120,
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
    },
    resultNumber: {
      fontWeight: '800',
      color: theme.colors.background5,
    },
    resultFormula: {
      fontSize: 13,
      color: theme.colors.onPrimary,
      opacity: 0.85,
      textAlign: 'center',
    },
  });

export default DashboardScreen;
