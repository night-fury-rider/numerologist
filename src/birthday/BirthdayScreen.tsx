import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Card, Text, useTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import DateRow from '$common/components/DateRow';
import {COLORS} from '$common/constants/colors.constants';
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
  const [dateString, setDateString] = useState(BIRTHDAY.changeDate);

  const [mulyank, setMulyank] = useState(0);
  const [mulyankClarification, setMulyankClarification] = useState(``);
  const [bhagyank, setBhagyank] = useState(0);
  const [bhagyankClarification, setBhagyankClarification] = useState(``);
  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setFirstRender(false);
    }

    const numerologyDay = getNumericSumValue(birthdate.getDate());
    const numerologyMonth = getNumericSumValue(birthdate.getMonth() + 1);
    const numerologyYear = getNumericSumValue(birthdate.getFullYear());

    let newBhagyank = numerologyDay + numerologyMonth + numerologyYear;

    let newBhagyankClarification = `${DASHBOARD.result.subtitle} ${numerologyDay}+${numerologyMonth}+${numerologyYear}`;

    if (newBhagyank > 9) {
      newBhagyank = getNumericSumValue(newBhagyank);
    }

    setMulyank(numerologyDay);
    setMulyankClarification(`${birthdate.getDate()}`.split('').join('+'));

    setBhagyank(newBhagyank);
    setBhagyankClarification(newBhagyankClarification);

    if (!isFirstRender) {
      setDateString(getDateString(birthdate));
    }
  }, [birthdate]);

  const styles = getStyles(
    theme.colors.inversePrimary,
    theme.colors.secondary,
    COLORS.purpleA400,
    theme.colors.secondary,
  );

  const handleChangeDate = (newDate: Date) => {
    setDatePickerOpen(false);
    setBirthdate(newDate);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <DateRow
            dateStr={dateString}
            onChangeDate={() => setDatePickerOpen(true)}
          />
          <DatePicker
            modal
            open={isDatePickerOpen}
            date={birthdate}
            mode="date"
            onConfirm={newDate => {
              handleChangeDate(newDate);
            }}
            onCancel={() => {
              setDatePickerOpen(false);
            }}
          />
        </View>

        {/* Mulyank */}
        <View style={styles.resultContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>{BIRTHDAY.result.mulyank.label}</Text>
              <Text style={styles.data} variant="displayLarge">
                {mulyank}
              </Text>
              {mulyankClarification ? (
                <Text style={styles.subtitle}>
                  {DASHBOARD.result.subtitle + ' '}
                  {mulyankClarification}
                </Text>
              ) : null}
            </Card.Content>
          </Card>
        </View>

        {/* Bhagyank */}
        <View style={styles.resultContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>{BIRTHDAY.result.bhagyank.label}</Text>
              <Text style={styles.data} variant="displayLarge">
                {bhagyank}
              </Text>
              <Text style={styles.subtitle}>{bhagyankClarification}</Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const getStyles = (
  resultContainerBackgroundColor: string,
  resultTitleColor: string,
  resultDataBackgroundColor: string,
  resultSubtitleBackgroundColor: string,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
      rowGap: 25,
    },
    dateContainer: {
      flex: 3,
      justifyContent: 'center',
    },
    resultContainer: {
      flexGrow: 2,
      backgroundColor: resultContainerBackgroundColor,
      padding: 16,
      justifyContent: 'center',
    },
    card: {
      borderRadius: 8,
      elevation: 3,
      padding: 16,
    },
    title: {
      color: resultTitleColor,
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

export default BirthdayScreen;
