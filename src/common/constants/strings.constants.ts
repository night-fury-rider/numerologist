// This file is intended to serve as the single source of truth for all strings/messages which are visible to user (including error messages)
// Prefer keeping strings inside appropriate module objects

export const COMMON = {
  errorsMsg: {
    itemNotFound: 'Unable to find the item',
    errorInPermissions: 'Error in permission',
    errorInReadingItems: 'Please allow accessing the items.',
  },
  permissions: {
    status: {
      granted: 'granted',
      denied: 'denied',
      never_ask_again: 'never_ask_again',
    },
  },
  colorScheme: {
    light: 'light',
    dark: 'dark',
  },
};

export const DASHBOARD = {
  emptyMsg: 'Dashboard is coming Soon',
  comingSoon: 'Dashboard is coming Soon',
  firstName: {
    label: 'First Name',
  },
  middleName: {
    label: 'Middle Name',
  },
  lastName: {
    label: 'Last Name',
  },
  result: {
    label: 'Lucky Number',
    subtitle: 'Clarification',
  },
};

export const BIRTHDAY = {
  emptyMsg: 'Birthday is coming Soon',
  comingSoon: 'Birthday is coming Soon',
  result: {
    mulyank: {
      label: 'Mulyank',
      subtitle: 'Clarification',
    },
    label: 'Lucky Number',
    subtitle: 'Clarification',
  },
};

export const SETTINGS = {
  title: 'Settings',
  comingSoon: 'Settings are coming soon',
  appVersion: 'App Version',
  chooseColorTheme: 'Choose Color Theme',
};

export const TOOLS = {
  title: 'Tools',
  comingSoon: 'Tools are coming soon',
};
