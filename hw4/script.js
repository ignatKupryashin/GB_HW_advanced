// 1. При изменении значения в input с id="from",
// значение содержащееся в нем должно моментально отображаться в
// span. То есть при печати в input'е тег span также должен меняться.


const fromInput = document.querySelector('#from');
const spanElement = document.querySelector('span');

fromInput.addEventListener('input', (e) => {
    spanElement.innerText = e.target.value;
})

// 2. При клике на кнопку с классом messageBtn необходимо элементу
// с классом message:
//     - добавить два класса: animate_animated
//     и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в
// значение 'visible'.

const messageBtn = document.querySelector('.messageBtn');
const message = document.querySelector('.message');

messageBtn.addEventListener('click', () => {
    message.classList.add('animate_animated', 'animate_fadeInLeftBig');
    message.style.visibility = 'visible';
})


// 3. Необходимо при отправке формы проверить,
// заполнены ли все поля в этой форме. Если какое-либо поле не заполнено,
// форма не должна отправляться, также должны быть подсвечены незаполненные поля
// (необходимо поставить класс form-control незаполненным полям). Как только пользователь начинает заполнять какое-либо поле,
// необходимо, при вводе в данное поле, произвести проверку:
//     - Если поле пустое,
//     необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error)
// необходимо убрать.


const formInputOne = document.querySelector('input.form-control');
const formInputTwo = document.querySelector('select.form-control');
const button = document.querySelector("form button");

const checkInput = (element) => {
    let hasError = element.classList.contains('error');
    let checkError = element.value !== '';
    if (checkError) {
        hasError && element.classList.remove('error');
    }
    else {
        !hasError && element.classList.add('error');
    }
}
    formInputOne.addEventListener('change', () => checkInput(formInputOne));
    formInputTwo.addEventListener('change', () => checkInput(formInputTwo));
button.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput(formInputOne);
    checkInput(formInputTwo);
    formInputOne.addEventListener('change', () => checkInput(formInputOne));
    formInputTwo.addEventListener('change', () => checkInput(formInputTwo));
    if (formInputOne.value && formInputTwo.value) {
        console.log('форма отправилась')
        return true;
    }
    else {
        console.log('форма не отправилась')
        return false;
    }
})