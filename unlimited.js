const randomColor=function(){
    const hex= '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
color += hex[Math.floor(Math.random() * 16)];
    }
return color;
}
let intervalId;
const starting= function(){
   intervalId= setInterval(colors,1000);
}
function colors(){
    document.body.style.backgroundColor = randomColor();
};
document.querySelector('#start').addEventListener('click',starting);

const stopping=function (){
    // alert("stop")
    clearInterval(intervalId);
}
document.querySelector('#stop').addEventListener('click',stopping);


