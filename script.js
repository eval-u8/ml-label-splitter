let inputEl = document.getElementById("input-el");
let outputEl = document.getElementById("output-el");
console.log(inputEl);

function splitfn() {
  outputEl.innerHTML = "";
  let str = inputEl.value;
  console.log(str);
  let str2 = str.split("|");
  console.log(str2);
  let newP = document.createElement("p");
  let newC = document.createTextNode(str2[2]);
  newP.appendChild(newC);
  outputEl.appendChild(newP);
  newP = document.createElement("p");
  newC = document.createTextNode(str2[4]);
  newP.appendChild(newC);
  outputEl.appendChild(newP);
  newP = document.createElement("p");
  newC = document.createTextNode(str2[12]);
  newP.appendChild(newC);
  outputEl.appendChild(newP);
  newP = document.createElement("p");
  newC = document.createTextNode(str2[10]);
  newP.appendChild(newC);
  outputEl.appendChild(newP);
  inputEl.value = "";
  copy();
}

const copy = async () => {
  try {
    await navigator.clipboard.writeText(outputEl.innerText);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

inputEl.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    splitfn(e);
  }
});
