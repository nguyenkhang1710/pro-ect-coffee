
// functions nut bam
btn1.addEventListener('click', ()=>{
  img.src = 'fan-off.jpg'; 
})

btn2.addEventListener('click', ()=>{
    img.src = 'fan-on.png';
})
 function fan_on() { 
                  document.getElementById("fan1").src="fan-on.png";
                  firebase.database().ref().update({"fan": "1"});
          }
        
function fan_off() { 
            document.getElementById("fan1").src ="fan-off.jpg";
            firebase.database().ref().update({"fan": "0"});
          }