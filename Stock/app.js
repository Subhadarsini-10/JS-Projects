var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var cur = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, cur);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(
      `Hey! the loss is ${loss} and the losspercentage is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / quantity) * 100;
    showOutput(
      `Hey the profit is ${profit} and the profit percentage is ${profitPercentage}%`
    );
  } else {
    showOutput("No pain no gain and no gain no pain.");
  }
}
function showOutput(message) {
  /*{switch(status){
        case "PROFIT":
            output.innerHTML = message;
        case "LOSS":
            output.innerHTML = message;
        case ""
        default:
            break;
    }}*/
  output.innerHTML = message;
}
