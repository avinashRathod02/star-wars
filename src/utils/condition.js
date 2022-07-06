export const hasValue = (field) => {
  return field !== null && typeof field !== 'undefined';
};
export const hasObjectLength = (field) => {
  return field && Object.keys(field).length !== 0;
};

export const hasTextLength = (string) => {
  return hasValue(string) && string.length !== 0;
};
