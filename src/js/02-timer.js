import flatpickr from "flatpickr";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
const optionsNotify = {
  position: 'right-top', 
  distance: '15px',
  borderRadius: '15px',
  timeout: 10000,
  clickToClose: true,
  cssAnimationStyle: 'from-right',
};
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
const bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = '#f7eff4';
console.log(bodyEl);

const btnStartEl = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const spanDays = document.querySelector('.value[data-days]');
const spanHours = document.querySelector('.value[data-hours]');
const spanMinutes = document.querySelector('.value[data-minutes]');
const spanSeconds = document.querySelector('.value[data-seconds]');




// console.log(inputEl);
// console.log(btnStartEl);

// const date = Date.now();

 
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
 
  return { days, hours, minutes, seconds };
};

btnStartEl.setAttribute('disabled', '');
let userTime;
let date;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]); 
  
      },
};


inputEl.addEventListener('input', (event) => {
  console.log(Date.parse(event.target.value));
   userTime = Date.parse(event.target.value);
   date = new Date();
const firstTimeNumber = Date.parse(date);
  if (userTime <= firstTimeNumber) {
     
    Notify.failure("❌Please choose a date in the future", optionsNotify);
         btnStartEl.setAttribute('disabled', '');
  } else { btnStartEl.removeAttribute('disabled'); };
     }
);
   
     function pad(value) {
      return String(value).toString().padStart(2, '0');
    };
    
const btnStart = () => {
  inputEl.setAttribute('disabled', '')
date = new Date();
  const firstTimeNumber = Date.parse(date);
  console.log(userTime);
     const counterMs = userTime - firstTimeNumber;
     btnStartEl.setAttribute('disabled', ''); 
   
       let timer = counterMs;
      const id = setInterval(() => {
         timer -= 1000;
         
         spanSeconds.textContent =pad(convertMs(timer).seconds);
         spanMinutes.textContent =pad(convertMs(timer).minutes);
         spanHours.textContent =pad(convertMs(timer).hours);
         spanDays.textContent= pad(convertMs(timer).days);
       
        if (timer === 0) {
          clearInterval(id);
           btnStartEl.removeAttribute('disabled');
        }
          },1000);     
};
 
btnStartEl.addEventListener('click', btnStart);

flatpickr(inputEl, options);
// console.log(date.toString());
// console.log(options.defaultDate);

// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
























// ------------------------------------------------------------------------
// import flatpickr from "flatpickr";

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// const optionsNotify = {
//   position: 'right-top', 
//   distance: '15px',
//   borderRadius: '15px',
//   timeout: 10000,
//   clickToClose: true,
//   cssAnimationStyle: 'from-right',
// };
// // Дополнительный импорт стилей
// import "flatpickr/dist/flatpickr.min.css";
// const bodyEl = document.querySelector('body');
// bodyEl.style.backgroundColor = '#f7eff4';
// console.log(bodyEl);

// const btnStartEl = document.querySelector('button[data-start]');
// const inputEl = document.querySelector('#datetime-picker');
// const spanDays = document.querySelector('.value[data-days]');
// const spanHours = document.querySelector('.value[data-hours]');
// const spanMinutes = document.querySelector('.value[data-minutes]');
// const spanSeconds = document.querySelector('.value[data-seconds]');


// btnStartEl.setAttribute('disabled', '');

// // console.log(inputEl);
// // console.log(btnStartEl);
// let date = new Date();
// // const date = Date.now();
 
// const firstTimeNumber = Date.parse(date);
 
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
 
//   return { days, hours, minutes, seconds };
 
// };
 
// // let userTime = selectedDates[0];

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]); 
    
//     const secondTimeNumber = Date.parse(selectedDates[0]);
    
//     if (secondTimeNumber <= firstTimeNumber) {
     
// //      
//       Notify.failure("❌Please choose a date in the future", optionsNotify);
//        btnStartEl.setAttribute('disabled', '');
//     }  else { btnStartEl.removeAttribute('disabled');};
    
//     const counterMs = secondTimeNumber - firstTimeNumber;
//     // console.log(counterMs);
//     // console.log(convertMs(counterMs).seconds); 
//     //   console.log(convertMs(counterMs).days);
//     //     console.log(convertMs(counterMs).hours);
//     //      console.log(convertMs(counterMs).minutes);
    
   
//     function pad(value) {
//       return String(value).toString().padStart(2, '0');
//     };
    
//     const btnStart = () => {
    
//      btnStartEl.setAttribute('disabled', ''); 
   
//        let timer = counterMs;
//       const id = setInterval(() => {
//          timer -= 1000;
         
//          spanSeconds.textContent =pad(convertMs(timer).seconds);
//          spanMinutes.textContent =pad(convertMs(timer).minutes);
//          spanHours.textContent =pad(convertMs(timer).hours);
//          spanDays.textContent= pad(convertMs(timer).days);
       
//         if (timer === 0) {
//           clearInterval(id);
//            btnStartEl.removeAttribute('disabled');
//         }
         
//           },1000);
          
//  };
//     btnStartEl.addEventListener('click', btnStart);
//   },
// };

// flatpickr(inputEl, options);
// console.log(date.toString());
// console.log(options.defaultDate);

// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}