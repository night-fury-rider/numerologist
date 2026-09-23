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
  // const previousDate = useAppSelector(state => state.birthday.history[0]);
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
          <Text style={styles.headerTitle}>{BIRTHDAY.title?.label}</Text>
          <Text style={styles.headerSubtitle}>
            {BIRTHDAY.instruction?.label}
          </Text>
        </View>

        <Card
          style={styles.heroCard}
          mode="elevated"
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

        <Text style={styles.sectionLabel}>Your numbers</Text>

        <View style={styles.resultRow}>
          <Card style={styles.resultCard} mode="elevated">
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

          <Card style={styles.resultCard} mode="elevated">
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

    // Hero date card
    heroCard: {
      borderRadius: 24,
      backgroundColor: theme.colors.background7,
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
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroDayNumber: {
      fontSize: 28,
      fontWeight: '800',
      color: theme.colors.onPrimary,
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
      opacity: 0.7,
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
      backgroundColor: theme.colors.background5,
      elevation: 4,
    },
    resultCardContent: {
      alignItems: 'center',
      paddingVertical: 28,
      paddingHorizontal: 12,
      rowGap: 14,
    },
    resultLabel: {
      fontSize: 14,
      fontWeight: '600',
      letterSpacing: 0.5,
      textTransform: 'uppercase',
      color: theme.colors.onPrimary,
      opacity: 0.85,
      textAlign: 'center',
    },
    resultBadge: {
      backgroundColor: theme.colors.onPrimary,
      borderRadius: 100,
      width: 104,
      height: 104,
      alignItems: 'center',
      justifyContent: 'center',
    },
    resultNumber: {
      fontWeight: '800',
      fontSize: 36,
      color: theme.colors.background5,
    },
    resultFormula: {
      fontSize: 12,
      color: theme.colors.onPrimary,
      opacity: 0.85,
      textAlign: 'center',
    },
  });

export default BirthdayScreen;
