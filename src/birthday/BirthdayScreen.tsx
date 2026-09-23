import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Card, Text, useTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {BIRTHDAY, DASHBOARD} from '$common/constants/strings.constants';
import {getDateString} from '$common/services/UtilService';
import {getNumericSumValue} from '$dashboard/DashboardService';

// TODO: Use specific type instead of any
const BirthdayScreen = () => {
  const theme = useTheme();
  const previousDate = new Date();
  const [birthdate, setBirthdate] = useState(previousDate);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [dateString, setDateString] = useState(getDateString(previousDate));

  const [mulyank, setMulyank] = useState(0);
  const [mulyankClarification, setMulyankClarification] = useState(``);
  const [bhagyank, setBhagyank] = useState(0);
  const [bhagyankClarification, setBhagyankClarification] = useState(``);

  useEffect(() => {
    const numerologyDay = getNumericSumValue(birthdate.getDate());
    const numerologyMonth = getNumericSumValue(birthdate.getMonth() + 1);
    const numerologyYear = getNumericSumValue(birthdate.getFullYear());

    let newBhagyank = numerologyDay + numerologyMonth + numerologyYear;

    let newBhagyankClarification = `${numerologyDay} + ${numerologyMonth} + ${numerologyYear}`;

    if (newBhagyank > 9) {
      newBhagyank = getNumericSumValue(newBhagyank);
    }

    setMulyank(numerologyDay);
    setMulyankClarification(`${birthdate.getDate()}`.split('').join(' + '));

    setBhagyank(newBhagyank);
    setBhagyankClarification(newBhagyankClarification);

    setDateString(getDateString(birthdate));
  }, [birthdate]);

  const styles = getStyles(theme);

  const handleChangeDate = (newDate: Date) => {
    setDatePickerOpen(false);
    setBirthdate(newDate);
  };

  const weekday = birthdate.toLocaleDateString(undefined, {weekday: 'long'});
  const day = birthdate.getDate();
  const monthYear = birthdate.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  });

  return (
    <SafeAreaProvider>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{BIRTHDAY.title.label}</Text>
          <Text style={styles.headerSubtitle}>
            {BIRTHDAY.instruction.label}
          </Text>
        </View>

        <Card
          style={styles.heroCard}
          mode="contained"
          onPress={() => setDatePickerOpen(true)}>
          <Card.Content style={styles.heroCardContent}>
            <View style={styles.heroDayCircle}>
              <Text style={styles.heroDayNumber}>{day}</Text>
            </View>

            <View style={styles.heroTextBlock}>
              <Text style={styles.heroWeekday}>{weekday}</Text>
              <Text style={styles.heroMonthYear}>{monthYear}</Text>
              <Text style={styles.heroChangeHint}>
                {BIRTHDAY.instruction.dateChange}
              </Text>
            </View>
          </Card.Content>
        </Card>

        <DatePicker
          modal
          open={isDatePickerOpen}
          date={birthdate}
          mode="date"
          androidVariant="iosClone"
          textColor={theme.colors.text1}
          dividerColor={theme.colors.primary}
          onConfirm={newDate => {
            handleChangeDate(newDate);
          }}
          onCancel={() => {
            setDatePickerOpen(false);
          }}
        />

        {/* Section label */}
        <Text style={styles.sectionLabel}>Your numbers</Text>

        {/* Results — gold ring treatment, matching Dashboard's result badge */}
        <View style={styles.resultRow}>
          <Card style={styles.resultCard} mode="contained">
            <Card.Content style={styles.resultCardContent}>
              <Text style={styles.resultLabel}>
                {BIRTHDAY.result.mulyank.label}
              </Text>

              <View style={styles.resultBadge}>
                <Text style={styles.resultNumber} variant="displayLarge">
                  {mulyank}
                </Text>
              </View>

              {mulyankClarification ? (
                <Text style={styles.resultFormula}>{mulyankClarification}</Text>
              ) : null}
            </Card.Content>
          </Card>

          <Card style={styles.resultCard} mode="contained">
            <Card.Content style={styles.resultCardContent}>
              <Text style={styles.resultLabel}>
                {BIRTHDAY.result.bhagyank.label}
              </Text>

              <View style={styles.resultBadge}>
                <Text style={styles.resultNumber} variant="displayLarge">
                  {bhagyank}
                </Text>
              </View>

              <Text style={styles.resultFormula}>{bhagyankClarification}</Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaProvider>
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
      rowGap: 24,
    },

    header: {
      rowGap: 4,
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

    heroCard: {
      borderRadius: 24,
      backgroundColor: theme.colors.background7,
      borderWidth: 1,
      borderColor: theme.colors.background4,
    },
    heroCardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 18,
      paddingVertical: 20,
    },
    heroDayCircle: {
      width: 72,
      height: 72,
      borderRadius: 36,
      backgroundColor: theme.colors.primaryContainer,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroDayNumber: {
      fontSize: 28,
      fontWeight: '800',
      color: theme.colors.primary,
    },
    heroTextBlock: {
      flex: 1,
      rowGap: 2,
    },
    heroWeekday: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.colors.text1,
    },
    heroMonthYear: {
      fontSize: 14,
      color: theme.colors.text1,
      opacity: 0.6,
    },
    heroChangeHint: {
      fontSize: 12,
      color: theme.colors.primary,
      fontWeight: '600',
      marginTop: 6,
    },

    sectionLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text1,
    },

    resultRow: {
      flexDirection: 'row',
      columnGap: 16,
    },
    resultCard: {
      flex: 1,
      borderRadius: 24,
      backgroundColor: theme.colors.background8,
      borderWidth: 1,
      borderColor: theme.colors.goldMuted,
    },
    resultCardContent: {
      alignItems: 'center',
      paddingVertical: 24,
      paddingHorizontal: 12,
      rowGap: 12,
    },
    resultLabel: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.colors.text1,
      opacity: 0.6,
      textAlign: 'center',
    },
    resultBadge: {
      backgroundColor: theme.colors.goldMuted,
      borderRadius: 100,
      width: 92,
      height: 92,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: theme.colors.gold,
    },
    resultNumber: {
      fontWeight: '800',
      fontSize: 32,
      fontVariant: ['tabular-nums'],
      color: theme.colors.gold,
    },
    resultFormula: {
      fontSize: 12,
      fontVariant: ['tabular-nums'],
      color: theme.colors.text1,
      opacity: 0.6,
      textAlign: 'center',
    },
  });

export default BirthdayScreen;
