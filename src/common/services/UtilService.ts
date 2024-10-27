// It is inteneded to contain all local utility things like string operations, object manipulalations etc.

const getClonedObject = (sourceObj: any) =>
  JSON.parse(JSON.stringify(sourceObj));

const getDateString = (
  dateObj: Date,
  dateFormat?: Intl.DateTimeFormatOptions,
): string =>
  `${dateObj.toLocaleDateString('en-gb', {
    day: dateFormat?.day || '2-digit',
    month: dateFormat?.month || 'short',
    year: dateFormat?.year || 'numeric',
  })}`;

const isValidName = (nameStr: string) => {
  // Regular expression to allow only alphabets
  const regex = /^[a-zA-Z ]*$/;
  if (regex.test(nameStr)) {
    return true;
  }

  return false;
};

export {getClonedObject, getDateString, isValidName};
