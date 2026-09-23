import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Card,
  Divider,
  Provider as PaperProvider,
  Text,
  useTheme,
} from 'react-native-paper';

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
  // theme.colors merges MD3 Paper tokens (primary, onPrimary, ...) AND
  // this app's custom indigo/gold tokens (background1, background7,
  // gold, goldMuted, text1, ...) via ThemeService.getTheme() — one
  // source of truth, no local palette here.
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

  // TextInput's floating-label backdrop defaults to Paper's MD3
  // background/surface tokens. Those already match this screen globally
  // (see ThemeService), but we still scope an explicit override here so
  // the label backdrop always tracks the exact card surface it's drawn
  // on (background7), regardless of any future global token changes.
  const inputTheme = {
    colors: {
      background: theme.colors.background7,
      surface: theme.colors.background7,
      onSurface: theme.colors.text1,
      onSurfaceVariant: theme.colors.text1,
      primary: theme.colors.primary,
      outline: theme.colors.background4,
    },
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {DASHBOARD.title?.label ?? 'Numerology'}
        </Text>
        <Text style={styles.headerSubtitle}>
          {DASHBOARD.instruction?.label ??
            'Enter a full name to see what it adds up to'}
        </Text>
      </View>

      {/* Input Card */}
      <Card style={styles.inputCard} mode="contained">
        <Card.Content style={styles.inputCardContent}>
          <View style={styles.row}>
            <PaperProvider theme={inputTheme}>
              <TextInput
                label={DASHBOARD.firstName.label}
                value={firstName}
                handleChange={newName => {
                  handleNameChange(`firstName`, newName);
                }}
                style={styles.nameField}
              />
            </PaperProvider>
            <Badge value={firstNameWeight} />
          </View>

          <Divider style={styles.divider} />

          <View style={styles.row}>
            <PaperProvider theme={inputTheme}>
              <TextInput
                label={DASHBOARD.middleName.label}
                value={middleName}
                handleChange={newName => {
                  handleNameChange(`middleName`, newName);
                }}
                style={styles.nameField}
              />
            </PaperProvider>
            <Badge value={middleNameWeight} />
          </View>

          <Divider style={styles.divider} />

          <View style={styles.row}>
            <PaperProvider theme={inputTheme}>
              <TextInput
                label={DASHBOARD.lastName.label}
                value={lastName}
                handleChange={newName => {
                  handleNameChange(`lastName`, newName);
                }}
                style={styles.nameField}
              />
            </PaperProvider>
            <Badge value={lastNameWeight} />
          </View>
        </Card.Content>
      </Card>

      {/* Result Card — the one place gold appears */}
      <Card style={styles.resultCard} mode="contained">
        <Card.Content style={styles.resultCardContent}>
          <Text style={styles.resultLabel}>{DASHBOARD.result.label}</Text>

          <View style={styles.resultBadge}>
            <Text style={styles.resultNumber} variant="displayLarge">
              {result}
            </Text>
          </View>

          <Text style={styles.resultFormula}>
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
      paddingBottom: 48,
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
      borderWidth: 1,
      borderColor: theme.colors.background4,
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

    resultCard: {
      borderRadius: 24,
      backgroundColor: theme.colors.background8,
      borderWidth: 1,
      borderColor: theme.colors.goldMuted,
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
      color: theme.colors.text1,
      opacity: 0.6,
    },
    resultBadge: {
      backgroundColor: theme.colors.goldMuted,
      borderRadius: 100,
      width: 120,
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: theme.colors.gold,
    },
    resultNumber: {
      fontWeight: '800',
      fontVariant: ['tabular-nums'],
      color: theme.colors.gold,
    },
    resultFormula: {
      fontSize: 13,
      fontVariant: ['tabular-nums'],
      color: theme.colors.text1,
      opacity: 0.6,
      textAlign: 'center',
    },
  });

export default DashboardScreen;
