// elementi
const discountunder18 = 20;
const discountover65 = 40;
const euroKm = 0.21;

// input
const inputName = document.querySelector('.input-name');
const inputKm = document.querySelector('.input-km');
const selectAge = document.querySelector('.select-age');

// output
const tiket = document.querySelector('.tiket');
const tiketError = document.querySelector('.tiket-error');
const tiketContent = document.querySelector('.tiket-content');
const myForm = document.querySelector('.my-form');
const myName = document.querySelector('.my-name');
const myDiscount = document.querySelector('.my-discount');
const myNVagon = document.querySelector('.my-n-vagon');
const myNTiket = document.querySelector('.my-n-tiket');
const myTiketPrice = document.querySelector('.my-tiket-price');

// buttons
const btnCreate = document.querySelector('.btn-create');
const btnCancel = document.querySelector('.btn-cancel');

btnCreate.addEventListener('click',function(event){
  event.preventDefault();
  console.log(inputName.value);
  console.log(inputKm.value);
  console.log(selectAge.value);

  let tiketPrice = parseInt(inputKm.value) * euroKm;
  console.log(tiketPrice);

  if(selectAge.value === 'under18'){
    tiketPrice = tiketPrice - (tiketPrice * discountunder18 / 100);
    console.log(tiketPrice);
    myDiscount.innerHTML = `
    <span class="fw-bold">Offerta</span>
    <p>Under18</p>
    `;
  }else if(selectAge.value === 'over65'){
    tiketPrice = tiketPrice - (tiketPrice * discountover65 / 100)
    console.log(tiketPrice);
    myDiscount.innerHTML = `
    <span class="fw-bold">Offerta</span>
    <p>Over65</p>
    `;
  }else{
    myDiscount.innerHTML = `
    <span class="fw-bold">Offerta</span>
    <p>Standard</p>
    `;
  };

  tiketPrice = tiketPrice.toFixed(2);

  console.log(tiketPrice);

  myName.innerHTML = `
  <span class="fw-bold fs-5">NOME PASSEGGERO</span>
  <p>${inputName.value}</p>
  `;

  const numVagon = Math.ceil(Math.random() * 10)
  myNVagon.innerHTML = `
  <span class="fw-bold">Carrozza</span>
  <p>${numVagon}</p>`;

  const numTiket = Math.ceil(Math.random() * 10000)
  myNTiket.innerHTML = `
  <span class="fw-bold">Biglietto n:</span>
  <p>${numTiket}</p>`;

  myTiketPrice.innerHTML = `
  <span class="fw-bold">Costo Biglietto</span>
  <p>${tiketPrice}&euro;</p>`;

  if(isNaN(inputName.value) == true && inputKm.value != '' && isNaN(inputKm.value) == false && selectAge.value != 'Sono:'){
    tiket.classList.remove('d-none');
    tiketError.classList.add('d-none');
    myForm.classList.add('mb-5');
  }else{
    tiket.classList.add('d-none');
    tiketError.classList.remove('d-none');
    myForm.classList.add('mb-5');
  };
});

btnCancel.addEventListener('click',function(){
  inputName.value = '';
  inputKm.value = '';
  selectAge.value = 'Sono:';

  tiket.innerHTML = `  `;

  tiket.classList.add('d-none');

  tiketError.classList.add('d-none');

  myForm.classList.remove('mb-5');
});