const count_number = [4,3,2,1,0];

let count_timer = -1;

const counter_script = ()=>{
    count_timer++;
    if (count_timer == count_number.length) count_timer = 0;
    document.getElementById('counter').textContent = count_number[count_timer];
    setTimeout(() => { counter_script(); }, 1000);
}


window.addEventListener('load',() => {

    counter_script();

})