// Get references to the buttons and elements to toggle
const burgerButtons = document.querySelectorAll('.br_icon');
const lists = document.querySelectorAll('.lis');

// Add a click event listener to each button
burgerButtons.forEach((burger, index) => {
  burger.addEventListener('click', function () {
    if (lists[index].style.display === 'none' || lists[index].style.display === '') {
      lists[index].style.display = 'block';
    } else {
      lists[index].style.display = 'none';
    }
  });
});

// call func

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







