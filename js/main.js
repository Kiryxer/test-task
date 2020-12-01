const time = 3000; //ms
const step = 2;

function outNum1(num, elem) {
  let l = document.querySelector('#' + elem);
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    l.innerHTML = n;
  },
    t);
}

outNum1(72, 'out-num');
