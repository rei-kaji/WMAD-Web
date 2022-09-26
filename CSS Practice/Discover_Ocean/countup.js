var start = new Date();

// 初期化
var hour = 0;
var min = 0;
var sec = 0;
var now = 0;
var datet = 0;

function disp() {
  now = new Date();

  datet = parseInt((now.getTime() - start.getTime()) / 1000);

  sec = datet % 60;

  if (sec < 10) {
    sec = "0" + sec;
  }

  let countup = document.getElementById("time_counter");
  countup.innerHTML = sec;

  setTimeout(() => {
    disp();
  }, 1000);
}

window.addEventListener("load", () => {
  disp();
});
