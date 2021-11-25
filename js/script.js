let goal;
let counter = 0;

function startgame() {
  goal = Math.ceil(Math.random() * 99);
  console.log("the correct number is", goal);
  document.getElementById("guessbutton").classList.remove("hide");
  document.getElementById("userinputlabel").classList.remove("hide");
  document.getElementById("userinput").classList.remove("hide");
  document.getElementById("startgamebutton").classList.add("hide");
  document.getElementById("img").src = "img/start-a-company-1000x600.jpg";
  document.getElementById("img").classList.remove("hide");
  document.getElementById("guesslist").classList.remove("hide");
}

function guess() {
  let userinput = document.getElementById("userinput").value;
  document.getElementById("list").innerHTML += "<p>" + userinput + "</p>";
  userinput = userinput.replace(/ /g, "");
  counter++;
  document.getElementById("counter").innerHTML =
    "<p>you have guessed " + counter + " times</p>";
  if (counter === 1 && userinput == goal) {
    document.getElementById("img").src = "img/the-lego-movie-batman.gif";
    document.getElementById("message").innerHTML = "<h1>first try!</h1>";
    document.getElementById("guessbutton").classList.add("hide");
    document.getElementById("restartbutton").classList.remove("hide");
  } else if (userinput === "") {
    document.getElementById("img").src = "img/maxresdefault (1).jpg";
    document.getElementById("message").innerHTML =
      "<h1>ERROR enter a number</h1>";
  } else if (userinput > goal) {
    document.getElementById("img").src = "img/maxresdefault.jpg";
    document.getElementById("message").innerHTML =
      "<h1>the number you entered is larger than the number you should guessed try again</h1>";
  } else if (userinput < goal) {
    document.getElementById("img").src =
      "img/4a99e401-d495-4480-9a3f-ca2885944000.jpeg";
    document.getElementById("message").innerHTML = "<h1>dream big</h1>";
  } else if (userinput == goal) {
    document.getElementById("img").src = "img/pointing-that-is-correct.gif";
    document.getElementById("message").innerHTML = "<h1>that is correct</h1>";
    document.getElementById("guessbutton").classList.add("hide");
    document.getElementById("restartbutton").classList.remove("hide");
  } else {
    document.getElementById("img").src = "img/maxresdefault (1).jpg";
    document.getElementById("message").innerHTML =
      "<h1>ERROR enter a number</h1>";
  }
}
function playagain() {
  counter = 0;
  document.getElementById("guessbutton").classList.add("hide");
  document.getElementById("userinputlabel").classList.add("hide");
  document.getElementById("userinput").classList.add("hide");
  document.getElementById("restartbutton").classList.add("hide");
  document.getElementById("startgamebutton").classList.remove("hide");
  document.getElementById("img").classList.add("hide");
  document.getElementById("guesslist").classList.add("hide");
  document.getElementById("message").innerHTML = "";
  document.getElementById("counter").innerHTML = "";
  document.getElementById("list").innerHTML = "";
  document.getElementById("userinput").value = "";
}
