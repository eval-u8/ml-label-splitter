let inputEl = document.getElementById("input-el");
let outputEl = document.getElementById("output-el");

function splitfn() {
  // outputEl.innerHTML = "";
  let str = inputEl.value;
  let str2 = str.split("|");
  let newP = document.createElement("p");
  newP.innerHTML =
    str2[4] + "  -  " + str2[2] + "  -  " + str2[10] + "  -  Qty: " + str[12];
  outputEl.appendChild(newP);
  inputEl.value = "";
}

function clearContent() {
  outputEl.innerHTML = "";
  inputEl.value = "";
}

const copy = async () => {
  try {
    await navigator.clipboard.writeText(outputEl.innerText);
    alert("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

inputEl.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    splitfn(e);
  }
});
