export function createUI(elem) {
  const el = elem;
  el.innerHTML = `<input>
<button>send</button>
<p>1</p>
<p>2</p>
<p>3</p>`;

  function changeTextField() {
    const elemText = el.querySelector("input");
    const elemButton = el.querySelector("button");
    if (elemText.value) {
      elemButton.hidden = false;
    } else {
      elemButton.hidden = true;
    }
  }

  function clickedOnTheButton() {
    let arrayElemP = el.querySelectorAll("p");
    const p = document.createElement("p");
    el.append(p);
    const elemText = el.querySelector("input");
    p.innerText = elemText.value;
    arrayElemP = el.querySelectorAll("p");

    if (arrayElemP.length > 5) {
      arrayElemP[0].remove();
    }
    elemText.value = "";
    changeTextField();
  }

  const elemText = el.querySelector("input");
  elemText.addEventListener("input", changeTextField);
  const elemButton = el.querySelector("button");
  elemButton.addEventListener("click", clickedOnTheButton);
  elemButton.hidden = true;
}
