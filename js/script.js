let menuOne = document.querySelector('.starter-option');
let menuTwo = document.querySelector('.main-option');
let menuThree = document.querySelector('.dessert-option');
let filters = document.querySelectorAll('.filter');
let menuItems = document.querySelectorAll('.entire-menu');
menuItems.forEach(items => {
    items.classList.add('display-active');
});

filters.forEach((btn,index) => {
    btn.addEventListener('click', () => {
        filters.forEach(button => {
            button.classList.remove('filter-active');
        });
        btn.classList.add('filter-active');
        if(index === 0){
            menuOne.classList.add(`display-active`)
            menuTwo.classList.add(`display-active`)
            menuThree.classList.add(`display-active`)

        }
        else if(index === 1){
            menuOne.classList.add(`display-active`)
            menuTwo.classList.remove(`display-active`)
            menuThree.classList.remove(`display-active`)
        }
        else if(index === 2){
            menuOne.classList.remove(`display-active`)
            menuTwo.classList.add('display-active')
            menuThree.classList.remove(`display-active`)
        }
        else if(index === 3){
            menuOne.classList.remove(`display-active`)
            menuTwo.classList.remove(`display-active`)
            menuThree.classList.add('display-active')
        }
    });
});

const showBuffe = document.querySelector('.buffe-container');
const showBuffeTwo = document.querySelector('.buffe-content');


const buffeBtn = document.querySelector('.buffe-info-btn');
buffeBtn.addEventListener('click', () =>{
    showBuffe.classList.toggle('buffe-active');
    if(buffeBtn.innerHTML == 'Visa information'){
        buffeBtn.innerText = 'Dölj information';
    }
    else{
        buffeBtn.innerText = 'Visa information';
    }

});

let total = 0;
function calcTotal(price){
    total = total + price;
    if(price == 0){
        total = 0;
    }
    document.querySelector('.total').innerText = `Totalt för denna beställning: ${total} kr`;
    
}