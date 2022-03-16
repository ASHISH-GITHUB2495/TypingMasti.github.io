var scoreg = 0;
var scorel = 0;

function scoregain() {
  const score = document.createElement("div");
  scoreg++;
  score.innerText = "Score: " + scoreg ;
  const loss = document.createElement("span");
  loss.innerText = "| Loss: "+scorel;
  score.classList.add("gain");
  loss.classList.add("loss");
  score.appendChild(loss);
  document.body.appendChild(score);
}

function scoreloss() {
    const score = document.createElement("div");
    scorel++;
    score.innerText = "Score: " + scoreg ;
    const loss = document.createElement("span");
    loss.innerText = "| Loss: "+scorel;
    score.classList.add("gain");
    loss.classList.add("loss");
    score.appendChild(loss);
    document.body.appendChild(score);
}

function createChars() {
  const char = document.createElement("div");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const ch = chars.charAt((Math.random() * 100) % 52);
  char.innerText = ch;
  char.classList.add("chars");
  let isRemoved=false;
  char.style.left = Math.floor(Math.random() * 100) + "%";
  document.body.appendChild(char);
  document.body.addEventListener("keypress", (event) => {
    if (event.key === ch) {
      char.remove();
      scoregain();
      isRemoved=true;
    }
  });

  setTimeout(() => {
    if (!isRemoved) {
      char.remove();
      scoreloss();
    }
  }, 5010);
}

setInterval(createChars, 1000);
