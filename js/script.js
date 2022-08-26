const counter = (() => {
  let count = 0;

  const counter = document.getElementById("count");
  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  const reset = document.getElementById("reset");

  minus.addEventListener("click", decreaseCounter);
  plus.addEventListener("click", increaseCounter);
  reset.addEventListener("click", resetCounter);

  function decreaseCounter() {
    count--;
    counter.textContent = count;
  }
  function increaseCounter() {
    count++;
    counter.textContent = count;
  }

  function resetCounter() {
    count = 0;
    counter.textContent = count;
  }
})();
