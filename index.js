

 let countDownDate = new Date("Nov 21, 2022 7:00:00").getTime() 
//  step2
 let timeInterval = setInterval(function(){




  const now = new Date().getTime()
  const timeRemain =countDownDate - now
 let  hours= Math.floor((timeRemain%(1000* 60 * 60 * 24))/(1000*60*60))
  let minutes = Math.floor((timeRemain % (1000* 60 *60))/(1000*60))
 let  days = Math.floor(timeRemain/(1000 * 60 *60 * 24))
 let  seconds = Math.floor((timeRemain % (1000 * 60))/(1000))

document.getElementById("days").textContent = days
document.getElementById("hours").textContent = hours
document.getElementById("minutes").textContent = minutes
document.getElementById("seconds").textContent = seconds

  
if(timeRemain < 0) {
  clearInterval(timeInterval)
  hours.innerHTML = ''
days .innerHTML = ''
mins.innerHTML = ''
secs.innerHTML = ''
deadline .innerHTML = `<h4 class="expired">THE WORLD CUP HAS STARTED!</h4>`; 
}


  },1000)

  // preloader

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("disappear");
});''
 





 