const scriptingFc = (callback) => {
    const text = "Our Services";
    const textArea = document.querySelector('.hederText');
    let i = 0;

    function script() {
        if (i < text.length) {
            textArea.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(intervalId);
            if (typeof callback === 'function') {
                callback();
            }
        }
    }
    const intervalId = setInterval(script, 100);
}

// You can use DOMContentLoaded event to make sure the DOM is ready before you run your script.
document.addEventListener('DOMContentLoaded', (event) => {
    scriptingFc();
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var elements = document.querySelectorAll('.text');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }
    }, 3000);
});


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



