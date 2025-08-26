// const clock = document.getElementById("clock");
const clock = document.querySelector('#clock')
// console.log(clock);

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString("en-US");
}, 1000);
