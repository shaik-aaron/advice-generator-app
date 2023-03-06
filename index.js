var adviceID = document.querySelector("#advice--id");
var adviceText = document.querySelector("#advice--text");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      var id = data["slip"]["id"];
      var advice = data["slip"]["advice"];

      adviceID.innerHTML = "ADVICE " + "#" + id;
      adviceText.innerHTML = `"` + advice + `"`;
    });
}

getAdvice();
