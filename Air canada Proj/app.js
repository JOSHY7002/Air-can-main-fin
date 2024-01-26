
//buttons 5-6 will cycle through all the employees using previous and next buttons

const reviews = [
    {
      id: 1,
      name: 'Micheal',
      job: 'Fight Attendant',
      img: 'mikal.png',
      text: "Micheal thinks that Air Canada is a great company and they treat their employees very well. He enjoys his job as a flight attendant as he gets to travel with the passengers",
    },
    {
      id: 2,
      name: 'Isaiah',
      job: 'Pilot',
      img: 'Isaiah.png',
      text: 'For Isaiah, Air Canada is a second home to him, hes been working as a pilot for as long as he could remeber and so far hes enjoyed every moment of it.',
    },
    {
      id: 3,
      name: 'Kevin',
      job: 'Security',
      img: 'Kevin.png',
      text: 'Kevin is the beloved security guard at Air Canada, he loves the place and loves protecting the people that go there. As a security guard his job is to maintain order within the airport.',
    },
    {
      id: 4,
      name: 'Mehthaab',
      job: 'Baggage',
      img: 'Metab.png',
      text: 'Mehthaab is a newer addition to the Air Canada family so he doesnt really know the ins- and outs of the place. But so far hes been loving his job. He is the one handling passenger baggage so every flight goes smoothly.',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });


  //Button 1-3 Like and Dislike, uses if/else arrays and loops to allow the counter to go up or down. Will turn red if negative will turn green if postive
  let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const randt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    let random = 0;
  for (let i = 0; i < 1; i++) {
    random += randt[getRandomNumber()];
  }

    if (styles.contains("Third")) {
      count--;
    } else if (styles.contains("First")) {
      count++;}
      else if  (styles.contains("Second")){
        count = 0;
      }
    else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

function getRandomNumber() {
    return Math.floor(Math.random() * randt.length);
  }
 

  //Color changer button uses an array and random function with a loop to sort through hex values then assigns that value to change the backround color

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const Nom = document.getElementById("Fourth");
const color = document.querySelector(".color");

Nom.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
 document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

//Media query in the smaller screen form, will create toggle the navbar into a kind of dropdown.
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
  links.classList.toggle("show-links");
});

//Airplane Button removes the navbar from the screen and there is another button that reveals it again. uses if/else to work

function myFunction() {
  var x = document.getElementById("Hello");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

//Random button uses random functions and an array so it can cycle through statments that will replace the title

const rando = document.getElementById("Seventh");

rando.addEventListener("click", function(){
  let array = ["Thanks for clicking on our website!", "Come again next time", "What did you think about the website?", "AIR CANADA!!!"]
  var random = array[Math.floor(Math.random() * array.length)];
  document.getElementById("MEE").innerHTML=random;
})

