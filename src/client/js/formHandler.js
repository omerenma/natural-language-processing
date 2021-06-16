export const handleSubmit = (event) => {
  event.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  const urlData = {
    formText,
  };
  if (Client.checkForName(formText)) {
    fetch('http://localhost:5000/apidata', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(urlData),
    })
      .then((data) => data.json())
      .then((data) => {
        document.getElementById('subjectivity').innerHTML =
          'Subjectivity: ' + data.subjectivity;
        document.getElementById('confidence').innerHTML =
          'Confidence: ' + data.confidence;
        document.getElementById('agreement').innerHTML =
          'Agreement: ' + data.agreement;
        document.getElementById('score').innerHTML = 'Score:' + data.score_tag;
      });
  } else {
    alert('URL must be valid');
  }
};
