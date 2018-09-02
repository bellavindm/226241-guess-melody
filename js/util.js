export const getElemFromTmp = (tmp) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = tmp.trim();
  return wrapper.firstElementChild;
};


const mainElem = document.querySelector(`.main`);
export const updateScreen = (elem) => {
  mainElem.innerHTML = ``;
  mainElem.appendChild(elem);
};


export const getRandomInt = (num) => {
  return Math.floor(Math.random() * num);
};


export const addZero = (num) => {
  if (num < 10) {
    return `0` + num;
  }
  return num;
};


export const getTime = (minutes) => {
  const time = new Date(minutes * 60 * 1000);
  return `<span class="timer__mins">${addZero(time.getMinutes())}</span>
  <span class="timer__dots">:</span>
  <span class="timer__secs">${addZero(time.getSeconds())}</span>`;
};
