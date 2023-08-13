const inputEl = document.getElementById("input-el");
const outputEl = document.getElementById("output-el");

function splitfn() {
  const str = inputEl.value;
  const str2 = str.split("|");
  outputEl.innerHTML +=
    "<li>" +
    str2[4] +
    "  -  " +
    str2[2] +
    "  -  " +
    str2[10] +
    "  -  Qty: " +
    str2[12].slice(0, -6) +
    "</li>";
  inputEl.value = "";
  // Check labels with larger than 1 digit quantities to update the slice function above, to make it more readable
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
