import { Notify } from 'notiflix/build/notiflix-notify-aio';
const options = {
  position: 'center-bottom',
  distance: '15px',
  borderRadius: '15px',
  timeout: 10000,
  clickToClose: true,
  cssAnimationStyle: 'from-right',
};

const bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = '#f7eff4';
// console.log(bodyEl);
const formEl = document.querySelector('.form');

const buttonEl = document.querySelector('button[type="submit"]');

const delayEl= document.querySelector('input[name="delay"]');
// console.log(delayEl);
const stepEl= document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
 
delayEl.addEventListener('input', (event) => {
 
    delayEl.textContent = Number(event.currentTarget.value);
    console.dir(delayEl.textContent);
  });

stepEl.addEventListener('input', (event) => {
 
    stepEl.textContent = Number(event.currentTarget.value);
    console.log(stepEl.textContent);

});
amountEl.addEventListener('input', (event) => {
 amountEl.textContent = Number(event.currentTarget.value);
    console.log(amountEl.textContent);

});


   buttonEl.addEventListener('click', onPromiseCreate);

if (delayEl.textContent < 0 || stepEl.textContent < 0 || amountEl.textContent<=0) {
  Notify.failure("❌Please choose a value greater than  0", options);
return} else {}

function createPromise(position, delay) {
  // event.preventDefault();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
         
        // Fulfill
      } else {
         reject({ position, delay }); 
       
        // Reject
      }
    }, delay);
  } 
  ) 
};

function onPromiseCreate(event) {
  event.preventDefault();
  if (delayEl.textContent < 0 || stepEl.textContent < 0 || amountEl.textContent <= 0) {
    Notify.failure("❌Please choose a value greater than  0", options);
    return
  } else {
    console.log(event.currentTarget);
    let promiseDelay = Number(delayEl.textContent);
    for (let i = 1; i <= amountEl.textContent; i += 1) {
    
      createPromise(i, promiseDelay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, options);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, options);
        });
      promiseDelay += Number(stepEl.textContent);
    };
    // event.currentTarget.reset(); }
  };
}
