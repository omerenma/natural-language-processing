// export const handleSubmit = (event) => {
//   event.preventDefault();

//   // check what text was put into the form field
//   let formText = document.getElementById('name').value;
//   const urlData = { formText };

//   Client.checkForName(formText);

//   fetch('http://localhost:3000/apidata', {
//     method: 'POST',
//     'Content-Type': 'application/json',
//     body: JSON.stringify(urlData),
//   })
//     .then((res) => res.json())
//     .then(function (res) {
//       document.getElementById('results').innerHTML = res.message;
//     });
// };

export const handleSubmit = (event) => {
  event.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  const urlData = {
    formText,
  };
  if (Client.checkForName(formText)) {
    fetch('http://localhost:3000/apidata', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(urlData),
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById('model').innerHTML = 'Model: ' + res.model;
        document.getElementById('score_tag').innerHTML =
          'Score: ' + res.score_tag;
        document.getElementById('agreement').innerHTML =
          'Agreement: ' + res.agreement;
        document.getElementById('subjectivity').innerHTML =
          'Subjectivity: ' + res.subjectivity;
        document.getElementById('confidence').innerHTML =
          'Confidence: ' + res.confidence;
        document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
      });
  } else {
    alert('URL must be valid');
  }
};
