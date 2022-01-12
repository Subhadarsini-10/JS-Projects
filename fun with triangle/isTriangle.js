const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function CalculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = CalculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerText = "Yay!, the angles form a triangle";
  } else {
    output.innerText("oh oh!, the angeles don't form a triangle");
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
