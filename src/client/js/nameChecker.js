export const checkForName = (inputText) => {
  // Regex to check that the url entered is a valid one using Contructor
  const result = new RegExp(/^(http|https):\/\/[^ "]+$/);
  return result.test(inputText);
};
