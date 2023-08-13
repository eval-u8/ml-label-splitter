const inputEl = document.getElementById("input-el");
const outputEl = document.getElementById("output-el");

function splitfn() {
  const str = inputEl.value;
  const str2 = str.split("|");
  let newP = document.createElement("p");
  newP.innerHTML =
    str2[4] + "  -  " + str2[2] + "  -  " + str2[10] + "  -  Qty: " + str2[12];
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
