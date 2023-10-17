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


