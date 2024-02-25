const countDownDate = new Date("Feb 29, 2026 00:00:00").getTime();

const x = setInterval(()=>{

    const now = new Date().getTime();
    
    const distance = countDownDate - now;
    
    const day = Math.floor(distance / (1000 * 60 * 60 *24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(`Day ${day} : hours ${hours} : minute ${minute} : second ${second}`);
    document.querySelector(".dayCount").innerHTML = `${day}`;
    document.querySelector(".hoursCount").innerHTML = `${hours}`;
    document.querySelector(".minutesCount").innerHTML = `${minute}`;
    document.querySelector(".secondsCount").innerHTML = `${second}`;

    if(distance < 0){
        clearInterval(x);
        document.querySelector(".heading").innerHTML = "Ready To Go";
    }
},1000)
