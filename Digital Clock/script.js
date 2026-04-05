const clock = document.getElementById('clock');
setInterval(function(){
    DateTime = new Date();
    clock.textContent = DateTime.toLocaleTimeString();
},1000)