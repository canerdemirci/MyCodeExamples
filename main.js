const selectBox = document.getElementById('selectBox');
const msgText = document.getElementById('msgText');
const newBtn = document.getElementById('newBtn');

var selectedInt;

selectBox.addEventListener('change', selectBoxOnChange);
newBtn.addEventListener('click', newBtnOnClick);

initSelectBox();

function initSelectBox() {
    selectBox.innerHTML = '';
    msgText.innerText = '';

    for (let i=1; i<=16; i++) {
        selectBox.innerHTML += '<option>' + i + '</option>';
    }

    selectedInt = guessInteger();
}

function guessInteger(min = 1, max = 16) {
    let i = Math.floor(Math.random() * 17);
    if (i == 0) i = 1;

    return i;
}

function selectBoxOnChange() {
    let g = this.value;
    let f = selectedInt - g;
    let msg = (f < 0 ? 'Daha Küçük' : 'Daha Büyük');

    console.log('Bilgisayarın seçtiği: ' + selectedInt);
    console.log('Seçilen sayı: ' + g);
    console.log('Fark: ' + f);

    if (g == selectedInt) msg = 'Tebrikler bildiniz'; 
    
    msgText.innerText = msg;
}

function newBtnOnClick() {
    initSelectBox();
}