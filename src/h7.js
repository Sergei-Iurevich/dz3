export function createUI(el) {
  el.innerHTML = `<input>
<button>send</button>
<p>1</p>
<p>2</p>
<p>3</p>`;

  const elemText = el.querySelector("input");
  elemText.addEventListener("input", changeTextField);
  const elemButton = el.querySelector("button");
  elemButton.addEventListener("click", clickedOnTheButton);
  elemButton.hidden = true;

  function changeTextField() {
    if (elemText.value) {
      elemButton.hidden = false;
    } else {
      elemButton.hidden = true;
    }
  }

  function clickedOnTheButton() {
    let arrayElemP = el.querySelectorAll("p");
    const p = document.createElement("p");
    p.innerText = elemText.value;
    el.append(p);
    arrayElemP = el.querySelectorAll("p");
    if (arrayElemP.length > 5) {
      arrayElemP[0].remove();
    }
    elemText.value = "";
    changeTextField();
  }
}
