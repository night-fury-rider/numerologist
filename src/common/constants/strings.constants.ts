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
  firstName: {
    label: 'First Name',
  },
  instruction: {
    label: 'Enter your full name to calculate your lucky number',
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
  title: {
    label: 'Numerology',
  },
};

export const BIRTHDAY = {
  changeDate: 'Change Date',
  instruction: {
    label: 'Pick a date to see what it adds up to',
    dateChange: 'Tap to change date',
  },
  result: {
    mulyank: {
      label: 'Mulyank',
      subtitle: 'Clarification',
    },
    bhagyank: {
      label: 'Bhagyank',
      subtitle: 'Clarification',
    },
    label: 'Lucky Number',
    subtitle: 'Clarification',
  },
  title: {
    label: 'Birth Date',
  },
};

export const SETTINGS = {
  title: 'Settings',
  appVersion: 'App Version',
};
