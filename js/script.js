// elementi
const discountunder18 = 20
const discountover65 = 40
const euroKm = 0.21

// input
const inputName = document.querySelector('.input-name');
const inputKm = document.querySelector('.input-km');
const selectAge = document.querySelector('.select-age');

// output
const tiket = document.querySelector('.tiket')

// buttons
const btnCreate = document.querySelector('.btn-create')
const btnCancel = document.querySelector('.btn-cancel')

btnCreate.addEventListener('click',function(event){
  event.preventDefault();
  console.log(inputName.value);
  console.log(inputKm.value);
  console.log(selectAge.value);

  let tiketPrice = inputKm.value * euroKm
  console.log(tiketPrice);

  if(selectAge.value === 'under18'){
    tiketPrice = tiketPrice - (tiketPrice * discountunder18 / 100)
    console.log(tiketPrice);
  }else if(selectAge.value === 'over65'){
    tiketPrice = tiketPrice - (tiketPrice * discountover65 / 100)
    console.log(tiketPrice);
  }

  tiketPrice = tiketPrice.toFixed(2)

  tiket.innerHTML = `
  <p> Ciao ${inputName.value} il tuo bilgietto per fare ${inputKm.value}Km costa ${tiketPrice}&euro;</p>
  `
});

btnCancel.addEventListener('click',function(){
  inputName.value = '';
  inputKm.value = '';
  selectAge.value = 'Sono:';
});