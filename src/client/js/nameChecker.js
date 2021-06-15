export const checkForName = (inputText) => {
  const result = new RegExp(/^(http|https):\/\/[^ "]+$/);
  return result.test(inputText);
};
