import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import pkg from '$root/package.json';
import {SETTINGS} from '$common/constants/strings.constants';

const SettingsScreen: React.FC = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}>
      {/* Header — same pattern as Dashboard / Birthday */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{SETTINGS.title.label}</Text>
        <Text style={styles.headerSubtitle}>{SETTINGS.subTitle.label}</Text>
      </View>

      <Card style={styles.groupCard} mode="elevated">
        <Card.Content style={styles.groupCardContent}>
          <SettingsRow
            iconName="information"
            label={SETTINGS.appVersion}
            value={pkg.version}
            theme={theme}
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const SettingsRow: React.FC<{
  iconName: string;
  label: string;
  value?: string;
  onPress?: () => void;
  theme: ReturnType<typeof useTheme>;
}> = ({iconName, label, value, onPress, theme}) => {
  const styles = getStyles(theme);

  return (
    <View style={styles.row}>
      <View style={styles.rowIconCircle}>
        <Icon name={iconName} size={20} color={theme.colors.primary} />
      </View>

      <Text style={styles.rowLabel}>{label}</Text>

      {value ? <Text style={styles.rowValue}>{value}</Text> : null}
    </View>
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

    groupCard: {
      borderRadius: 20,
      backgroundColor: theme.colors.background7,
    },
    groupCardContent: {
      paddingVertical: 4,
    },

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 14,
      paddingVertical: 14,
    },
    rowIconCircle: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: theme.colors.primaryContainer,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowLabel: {
      flex: 1,
      fontSize: 15,
      color: theme.colors.text1,
    },
    rowValue: {
      fontSize: 15,
      fontWeight: '600',
      color: theme.colors.text1,
      opacity: 0.6,
    },
  });

export default SettingsScreen;
