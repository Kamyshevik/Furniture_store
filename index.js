gsap.from (".timerDays", {
  x: -300,
  duration: 1,
  opasity: 0,
})

gsap.from (".timerHours", {
  y: -300,
  duration: 1,
  opasity: 0,
})

gsap.from (".timerMinutes", {
  y: 200,
  duration: 1,
  opasity: 0,
})

gsap.from (".timerSeconds", {
  x: 300,
  duration: 1,
  opasity: 0,
})

// Код магазина
const items = document.querySelectorAll ('.item');
items.forEach (item => {
    item.addEventListener('mouseover', () => {
    removeFocus ();
    item.classList.add ('selected');
    })    
removeFocus = ()=>{
    items.forEach (item => {
        item.classList.remove ('selected');
    })
}    
})

// Код таймера
function timerCountdown (){    
        const timerDate = new Date ("June 4, 2023 00:00");
        const now = new Date();
        const diff = timerDate - new Date;
        const msInSecond = 1000;
        const msInMinute = 60*1000;
        const msInHour = 60*60*1000;
        const msInDay = 24*60*60*1000;

        const displayDay = Math.floor(diff/msInDay);
        document.querySelector(".days").textContent = displayDay;
    
        const displayHour = Math.floor((diff%msInDay) / msInHour);
        document.querySelector(".hours").textContent = displayHour;
    
        const displayMinute = Math.floor ((diff%msInHour) / msInMinute);
        document.querySelector(".minutes").textContent = displayMinute;
    
        const displaySecond = Math.floor ((diff%msInMinute) / msInSecond);
        document.querySelector(".seconds").textContent = displaySecond;

        if (diff <=0) {
            document.querySelector(".days").textContent = 0;
            document.querySelector(".hours").textContent = 0;
            document.querySelector(".minutes").textContent = 0;
            document.querySelector(".seconds").textContent = 0;

            clearInterval (timerID);
            marryChristmass();
        }
    }
    let timerID = setInterval (timerCountdown, 1000);

        function marryChristmass (){
        const heading = document.querySelector ("h1"); //выделяем заголовок который хотим поменять
        heading.textContent = "Счастливого Нового года!";//меняем текст - пишем что нужно отразить
        heading.classList.add ("red"); //примняем класс, который создаем
    }

    // Генератор скидок
const input = document.querySelector("#guess");
const button = document.querySelector("#btn");

let max = 50;
let min = 20;
const answer = Math.floor(Math.random() * (max - min + 1) ) + min;  

input.addEventListener("keypress", function (e) {
  //e - event
  if (e.keyCode === 13) {
    //13 -код кнопки Enter
    play();
  }
});

console.log(answer)

button.addEventListener("click", play);
function play() {
const userNumber = document.querySelector("#guess").value;

  if (userNumber < 20 || userNumber > 50) {
    Swal.fire({
      icon: "error",
      title: "Скидка составляет 0%",
      text: "Введи число от 20 до 50!", //условие, если больше или меньше 20 и 50
    });
  } else if (isNaN(userNumber)) {
    Swal.fire({
      icon: "error",
      title: "Скидка составляет 0%",
      text: "Нужно ввести число!", //условие если буквы, а не цифры
    });
  } else {
    if (userNumber < answer) {
      Swal.fire("Введите число выше!", "Пока не угадали..."); //если ниже answer
    } else if (userNumber > answer) {
      Swal.fire("Введи число ниже!", "Пока не угадали..."); //если выше answer
    } else {
      Swal.fire({
        //alert ('Ваша скидка составила ' + answer + '%')
        title: "Congratulations!",
        text: "Ваша скидка составит " + answer + "%", //если равно answer
        imageUrl:
          "https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        imageWidth: 450,
        imageHeight: 400,
        imageAlt: "congratulations",
      });
    }
  }
}






