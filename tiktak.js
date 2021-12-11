let tick = true;
let count=0;
let t;
let n = prompt("Введите время");
function ticker(time) {
  let d1 = new Date();
  let dif = (d1.getTime() - d.getTime()) / 1000;
  if (dif >= time) {
    clearInterval(t);
    
  }
  if (tick) {
    document.write("Тик ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
     count++;
     if (count == 10){
        clearInterval(t);
    }
}

let d = new Date();

t = setInterval(ticker.bind(this, n), 1000);