export const checkForName = (inputText) => {
  // Check for empty fiel
  if (inputText === '') {
    alert('Field cannot be empty');
  }
  // Regex to check that the url entered is a valid one using Contructor
  const validateUri = new RegExp(/(^http[s]?:\/{2})|(^www)|(^\/{1,2})/);
  return validateUri.test(inputText);
};
