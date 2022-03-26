const ClassOpenBtn = document.querySelectorAll('.open_btn');
const ClassCloseBtn = document.querySelectorAll('.close_btn');
const ClassDescription = document.querySelectorAll('.description');
const ClassWrapper = document.querySelector('.wrapper');



for (let i = 0; i < ClassOpenBtn.length; i++) {
    ClassOpenBtn[i].addEventListener('click', () => {
        ClassDescription[i].classList.add('active');
        ClassOpenBtn[i].style.display = 'none';
        ClassCloseBtn[i].style.display = 'block';
    })
}

for (let i = 0; i < ClassCloseBtn.length; i++) {
    ClassCloseBtn[i].addEventListener('click', () => {
        ClassDescription[i].classList.remove('active');
        ClassOpenBtn[i].style.display = 'block';
        ClassCloseBtn[i].style.display = 'none';
    })
}

console.log('test');