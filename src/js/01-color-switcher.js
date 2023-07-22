// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }
const createRGB = () => {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red},${green},${blue})`;
 };
const bodyEl = document.querySelector('body');
console.log(bodyEl);
bodyEl.classList.add('body-color');
// const bodyColorEl = document.querySelector('.body-color');
// console.log(bodyEl);
// console.log(bodyColorEl);
const btnStartEl = document.querySelector('button[data-start]');
// console.log(btnStartEl);
const btnStopEl = document.querySelector('button[data-stop]');
// console.log(btnStartEl);

const btnStart = (event) => {
    //  background-color: #fafafa;
    setInterval(() => {
        console.log('Hallo');
        bodyEl.style.backgroundColor = `${createRGB()}`;
    }, 1000);
    btnStartEl.setAttribute('disabled', '');
    btnStopEl.removeAttribute('disabled');
        
};
const btnStop = (event) => {
    // clearInterval(timerId);
    console.log('Buy');
    bodyEl.style.backgroundColor = '#fafafa';
    btnStopEl.setAttribute('disabled', '');
   btnStartEl.removeAttribute('disabled');
};
 

btnStartEl.addEventListener('click', btnStart);
btnStopEl.addEventListener('click', btnStop);