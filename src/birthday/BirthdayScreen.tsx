import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Chip, IconButton, Text, useTheme} from 'react-native-paper';

import {COLORS} from '$common/constants/colors.constants';
import {BIRTHDAY, DASHBOARD} from '$common/constants/strings.constants';
import {getDateString} from '$common/services/UtilService';
import {getNumericSumValue} from '$dashboard/DashboardService';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';

// TODO: Use specific type instead of any
const BirthdayScreen = ({navigation}: any) => {
  const theme = useTheme();
  // const previousDate = useAppSelector(state => state.birthday.history[0]);
  const previousDate = new Date();
  const [birthdate, setBirthdate] = useState(previousDate);
  const [open, setOpen] = useState(false);
  const [dateString, setDateString] = useState(BIRTHDAY.changeDate);

  const [mulyank, setMulyank] = useState(0);
  const [mulyankClarification, setMulyankClarification] = useState(``);
  const [bhagyank, setBhagyank] = useState(0);
  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setFirstRender(false);
    }
    const newMulyank = getNumericSumValue(birthdate.getDate());
    const newBhagyank =
      newMulyank +
      getNumericSumValue(birthdate.getDate() + 1) +
      getNumericSumValue(birthdate.getDay());
    setMulyank(newMulyank);
    setMulyankClarification(`${birthdate.getDate()}`.split('').join('+'));
    setBhagyank(newBhagyank);
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

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.row}>
          <Chip
            icon={() => <IconButton icon="cake-variant-outline" size={25} />}
            style={[styles.dateString, {}]}
            textStyle={{
              lineHeight: 22,
              fontSize: 22,
            }}
            onPress={() => setOpen(true)}>
            {dateString}
          </Chip>
          <DatePicker
            modal
            open={open}
            date={birthdate}
            mode="date"
            onConfirm={newDate => {
              setOpen(false);
              setBirthdate(newDate);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <IconButton
            icon="calendar-month-outline"
            size={30}
            onPress={() => setOpen(true)}
            style={styles.dateSelection}
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
              <Text style={styles.subtitle}>
                {DASHBOARD.result.subtitle + ' '}
                {getNumericSumValue(birthdate.getDate())}+
                {getNumericSumValue(birthdate.getMonth() + 1)}+
                {getNumericSumValue(birthdate.getFullYear())}
              </Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </SafeAreaProvider>
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
      flexDirection: 'row',
      marginHorizontal: 10,
    },
    dateString: {
      flex: 3,
    },
    dateSelection: {},
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

export default BirthdayScreen;
