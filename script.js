const button = document.getElementById('calc');
const clear = document.getElementById('clear');
let count = 0;

button.addEventListener('click', () => {
  // console.log(bitc);
  const cur = document.getElementById('new-currency').value; //αποθήκευση επιλογής EUR ή USD για την μετατροπή
  fetch(`https://api.coinbase.com/v2/prices/spot?currency=${cur}`) //fetch το ανάλογο API (EUR/USD) με την επιλογή του χρήστη
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rate = data.data.amount; // τιμή για να πολλαπλασιάσω την τιμή bitcoin του χρήστη
      const rateNumber = parseFloat(rate); //μετατροπή σε αριθμό γιατί θεωρείται string
      const bitc = document.getElementById('bitcoin').value; //τιμή bitcoin που δίνει ο χρήστης
      if (bitc == '') {
        alert('Please give valid number');
      } else {
        const calculation = bitc * rateNumber; // τελικός αριθμός μετατροπής απο bitcoin σε eur/usd
        // console.log(calculation);
        document.getElementById('newCur').value = calculation; //εμφάνιση στο πεδίο
      }
    });
});

clear.addEventListener('click', () => {
  document.getElementById('bitcoin').value = ' ';
  document.getElementById('newCur').value = ' ';
});
