const display = document.querySelector('div.display');

async function getData() {
  display.innerHTML = 'Getting data...';
  const response = await fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'request-data': [1, 2, 3] }),
  });
  const json = await response.json();
  console.log(json);
  display.innerHTML = JSON.stringify(json);
}
