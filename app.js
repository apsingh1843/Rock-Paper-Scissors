let userscore=0;
let compscore=0;

const user_span= document.querySelector('#userscore');
const comp_span= document.querySelector('#compscore');

const result_text= document.querySelector('.result');

const rock_div= document.querySelector('#rock');
const paper_div= document.querySelector('#paper');
const scissors_div= document.querySelector('#scissors');

function Computer() {
  const comp_arr= ["rock","paper","scissors"];
  const random= Math.floor(Math.random()*3);
  return comp_arr[random];
}

function win(user_text, computerscore_text) {
  userscore++;
  user_span.innerHTML= userscore;
  comp_span.innerHTML= compscore;
  result_text.innerHTML= "User" + " ( " + user_text + " )" + " WINS to Computer" + " ( " + computerscore_text + " )";
  document.getElementById(user_text).classList.add('green-glow');
  setTimeout(function () {document.getElementById(user_text).classList.remove('green-glow')}, 500);
  image(user_text, computerscore_text);
}
function lose(user_text, computerscore_text) {
  compscore++;
  comp_span.innerHTML= compscore;
  user_span.innerHTML= userscore;
  result_text.innerHTML= "User" + " ( " + user_text + " )" + " LOSES to Computer" + " ( " + computerscore_text + " )";
  document.getElementById(user_text).classList.add('red-glow');
  setTimeout(function () {document.getElementById(user_text).classList.remove('red-glow')}, 700);
  image(user_text, computerscore_text);
}
function draw(user_text, computerscore_text) {
  comp_span.innerHTML= compscore;
  user_span.innerHTML= userscore;
  result_text.innerHTML= "User" + " ( " + user_text + " )" + " DRAWS to Computer" + " ( " + computerscore_text + " )";
  document.getElementById(user_text).classList.add('grey-glow');
  setTimeout(function () {document.getElementById(user_text).classList.remove('grey-glow')}, 700);
  image(user_text, computerscore_text);
}


function game(user) {
  const computerscore= Computer();
  switch (user + computerscore) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(user, computerscore);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorrock":
      lose(user, computerscore);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(user, computerscore);
      break;
  }
}

function image(iurl, curl) {
   const user_url=  iurl + '.png';
   const comp_url=  curl + '.png';
   document.getElementById("userimage").src = user_url;
   document.getElementById("compimage").src = comp_url;
   document.getElementById("userimage").classList.add('afterimage');
   document.getElementById("compimage").classList.add('afterimage');
}


function Main() {
  rock_div.addEventListener('click', () => {
     game("rock");
  });
  paper_div.addEventListener('click', () => {
     game("paper");
  });
  scissors_div.addEventListener('click', () => {
     game("scissors");
  });
}
Main();
