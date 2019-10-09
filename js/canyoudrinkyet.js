var now = new Date().getTime();

 

// set dobPicker value to today

$('document').ready(function() {

  let today = new Date().toISOString().substr(0, 10);

  document.querySelector("#dobPicker").value = today;

 

  // update copyright

  var year = (new Date).getFullYear();

  $("#copy").append("&copy; " + year + " — Zachary Velcoff");

});

 

function calculateAge() {

  var dobPicker = document.getElementById('dobPicker');

  var birthdate = dobPicker.value;

  console.log(birthdate);

  var birthdateAsDate = new Date(birthdate);

  var age = now - birthdateAsDate;

  var daysOld = Math.floor(age / (1000 * 60 * 60 * 24));

  var yearsOld = Math.floor(daysOld / 365);

  console.log("days old: " + daysOld);

  console.log("years old: " + yearsOld);

  if (yearsOld < 21) {

    document.getElementById("demo").innerHTML = "You cannot drink yet!";

  }

  else {

    document.getElementById("demo").innerHTML = "You can drink!";

  }

}

 

  // if over 21, verify if user is employed / if it is weekday

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

 

// Update the count down every 1 second

var x = setInterval(function() {

 

  // Find the distance between now and the count down date

  var distance = countDownDate - now;

   

  // Time calculations for days, hours, minutes and seconds

  var countdownDays = Math.floor(distance / (1000 * 60 * 60 * 24));

  var countdownHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var countdownMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var countdownSeconds = Math.floor((distance % (1000 * 60)) / 1000);

   

  // Output the result in an element with id="demo"

  //document.getElementById("demo").innerHTML = countdownDays + "d " + countdownHours + "h "

  //+ countdownMinutes + "m " + countdownSeconds + "s ";

   

  // If the count down is over, write some text

  if (distance < 0) {

    clearInterval(x);

    //document.getElementById("demo").innerHTML = "EXPIRED";

  }

}, 1000);

 

// set max datepicker value to today