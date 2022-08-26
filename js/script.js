const counter = (() => {
  let count = 0;

  const counter = document.getElementById("count");
  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  const reset = document.getElementById("reset");

  minus.addEventListener("click", decreaseCounter);
  plus.addEventListener("click", increaseCounter);
  reset.addEventListener("click", resetCounter);

  window.addEventListener("keypress", checkKey);

  function checkKey(e){
    if (e.key == '=') increaseCounter();
    if (e.key === "-") decreaseCounter();
  }

  function decreaseCounter() {
    count--;
    if (count > -1000000) counter.textContent = count;
    else alert("Minimum count is 1000000")
  }
  function increaseCounter() {
    count++;
    if (count < 1000000) counter.textContent = count;
    else alert("Maximum count is 1000000")

  }

  function resetCounter() {
    count = 0;
    counter.textContent = count;
  }
})();
