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
  const previousDate = new Date(`1980-06-01`);
  const [birthdate, setBirthdate] = useState(previousDate);
  const [open, setOpen] = useState(false);
  const [dateString, setDateString] = useState(getDateString(previousDate));

  const [mulyank, setMulyank] = useState(0);

  useEffect(() => {
    const newMulyank =
      getNumericSumValue(birthdate.getDate()) +
      getNumericSumValue(birthdate.getDate() + 1) +
      getNumericSumValue(birthdate.getDay());
    setMulyank(newMulyank);
    setDateString(getDateString(birthdate));
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
            icon="information"
            style={styles.dateString}
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
            size={20}
            onPress={() => setOpen(true)}
            style={styles.dateSelection}
          />
        </View>

        <View style={styles.resultContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>{BIRTHDAY.result.mulyank.label}</Text>
              <Text style={styles.data} variant="displayLarge">
                {mulyank}
              </Text>
              <Text style={styles.subtitle}>
                {DASHBOARD.result.subtitle + ' '}
                {getNumericSumValue(birthdate.getDay() + 1)}+
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
    dateSelection: {
      borderColor: 'green',
      borderWidth: 2,
    },
    scoreField: {},
    resultRow: {
      marginBottom: 30,
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
