// 7. Declare a variable that saves the button HTML element.
const myButton = document.querySelector('.button');
myButton.addEventListener('click', function() {
    alert('Button clicked!');
});

// 8. Select the button variable and change the text to say "Don't click!"
myButton.innerHTML = "Don't click!";