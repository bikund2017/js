const clockFunction = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const date_Time = `${hours}:${minutes}:${seconds}`;
document.getElementById("clock").textContent = date_Time;
};

setInterval(clockFunction, 1000);

clockFunction();
