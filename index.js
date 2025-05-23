let submit = document.getElementById("submit");
let desc = document.getElementById("des");
let n2 = document.getElementById("num1");
let replay = document.getElementById("replay");

let val = Math.floor(Math.random() * (100 + 1));

submit.addEventListener("click", () => {
  if (n2.value != null) {
    updateMessageInHtml(getMessage(Number(n2.value)));
  }
});

replay.addEventListener("click", () => {
  val = Math.floor(Math.random() * (100 + 1));
  updateMessageInHtml("");
  n2.value = "";
});

function getMessage(nu) {
  let diff = Math.abs(val - nu);
  if (nu == val) {
    return "Congratulations... Your Guess was correct";
  }
  if (nu > val) {
    if (diff >= 30) {
      return "Too high";
    }
    if (diff >= 10) {
      return "Close enough";
    }
    return "Almost there";
  }
  if (diff >= 30) {
    return "Too less";
  }
  if (diff >= 10) {
    return "Close enough";
  }
  return "Almost there";
}

function updateMessageInHtml(str) {
  desc.innerHTML = str;
}
