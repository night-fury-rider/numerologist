// This file is intended to contain all theming (custom fonts, coloring, dark mode, light mode etc.) related stuff in this file.
// Theme contains colors, fonts etc.

import {Appearance} from 'react-native';

import {
  INDIGO_DARK_THEME,
  INDIGO_LIGHT_THEME,
} from '$common/constants/colors.constants';
import {COMMON} from '$common/constants/strings.constants';
import {DefaultTheme, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';

const getDefaultTheme = (themeName = COMMON.colorScheme.light as ThemeProp) => {
  const lightTheme = {
    ...DefaultTheme,
    ...MD3LightTheme,
    colors: {
      ...DefaultTheme.colors,
      ...MD3LightTheme.colors,
      primary: '#5C4B9E',
      onPrimary: '#FFFFFF',
      primaryContainer: '#E4DEFB',
      onPrimaryContainer: '#1A0F52',

      secondary: '#535F70',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#D7E3F7',
      onSecondaryContainer: '#101C2B',

      background: '#F5F3FF',
      onBackground: '#1A1730',

      surface: '#FFFFFF',
      onSurface: '#1A1730',
      surfaceVariant: '#E0DBF5',
      onSurfaceVariant: '#43474E',

      outline: '#8A83A8',
    },
  };

  const darkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#8B7CD6',
      onPrimary: '#151233',
      primaryContainer: '#3A2E70',
      onPrimaryContainer: '#E4DEFB',

      secondary: '#B8B2D6',
      onSecondary: '#151233',
      secondaryContainer: '#3A2E70',
      onSecondaryContainer: '#E4DEFB',

      background: '#151233',
      onBackground: '#EDEAF6',

      surface: '#1E1A42',
      onSurface: '#EDEAF6',
      surfaceVariant: '#332C63',
      onSurfaceVariant: '#C8C2E8',

      outline: '#4A4370',
    },
  };

  return themeName === COMMON.colorScheme.light ? lightTheme : darkTheme;
};

const getCustomThemeColors = (
  themeName = COMMON.colorScheme.light as ThemeProp,
) =>
  themeName === COMMON.colorScheme.light
    ? INDIGO_LIGHT_THEME
    : INDIGO_DARK_THEME;

const isDarkModeON = () =>
  Appearance.getColorScheme() === COMMON.colorScheme.dark;

const getTheme = (
  themeName = COMMON.colorScheme.dark as ThemeProp, // dark-first: default to dark unless caller says otherwise
): ThemeProp => {
  let customTheme = getDefaultTheme(themeName);
  customTheme.colors = {
    ...customTheme.colors,
    ...getCustomThemeColors(themeName),
  };
  return customTheme;
};

export {getTheme, isDarkModeON};
