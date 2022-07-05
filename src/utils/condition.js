export const hasObjectLength = (field) => {
  return field && Object.keys(field).length !== 0;
};

export const hasTextLength = (string) => {
  return hasValue(string) && string.length !== 0;
};
