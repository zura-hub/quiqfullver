let clickCount = 0;
const callButton = document.getElementById("callButton");

callButton.addEventListener("click", function () {
  clickCount++;

  if (clickCount === 1) {
    callButton.textContent = '+1(267)-579-55-18';
  } else if (clickCount === 2) {
    window.location.href = 'tel: +1(267)-579-55-18';
  }
});

window.onload = () => {
  setTimeout(() => {
    callButton.style.display = 'block';
  }, 18000);
}

