const partInput = document.getElementById("part-input");
const splitPartBtn = document.getElementById("split-part-btn");
const clearPartBtn = document.getElementById("clear-part-btn");
const copyPartBtn = document.getElementById("copy-part-btn");
const outputPartEl = document.getElementById("output-part-el");

const crateInput = document.getElementById("crate-input");
const splitCrateBtn = document.getElementById("split-crate-btn");
const clearCrateBtn = document.getElementById("clear-crate-btn");
const copyCrateBtn = document.getElementById("copy-crate-btn");
const outputCrateEl = document.getElementById("output-crate-el");

splitPartBtn.addEventListener("click", splitPartFn);

function splitPartFn() {
  const str = partInput.value;
  const str2 = str.split("|");
  if (str2.length < 2) {
    return;
  }

  const newPartLine = document.createElement("li");
  newPartLine.textContent =
    str2[4] +
    "  -  " +
    str2[2] +
    "  -  " +
    str2[10] +
    "  -  Qty: " +
    Number(str2[12].split(".")[0]).toLocaleString("en-US");
  outputPartEl.appendChild(newPartLine);
  partInput.value = "";
}

clearPartBtn.addEventListener("click", function () {
  outputPartEl.innerHTML = "";
  // partInput.value = "";
});

const copyPart = async () => {
  try {
    await navigator.clipboard.writeText(outputPartEl.innerText);
    alert("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

copyPartBtn.addEventListener("click", copyPart);

partInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    splitPartFn(e);
  }
});

splitCrateBtn.addEventListener("click", splitCrateFn);

function splitCrateFn() {
  const str = crateInput.value;
  const str2 = str.split("|");
  console.log(str2);
  if (str2.length < 2) {
    return;
  }
  const newCrateLine = document.createElement("li");
  newCrateLine.textContent = str2[2];
  outputCrateEl.appendChild(newCrateLine);
  crateInput.value = "";
}

clearCrateBtn.addEventListener("click", function () {
  outputCrateEl.innerHTML = "";
  // crateInput.value = "";
});

const copyCrate = async () => {
  try {
    await navigator.clipboard.writeText(outputCrateEl.innerText);
    alert("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

copyCrateBtn.addEventListener("click", copyCrate);

crateInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    splitCrateFn(e);
  }
});
