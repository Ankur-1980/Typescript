const toggleColor = document.querySelector('#toggle-color');
toggleColor.addEventListener('click', function() {
	document.body.classList.toggle('light-coral');
});

// counter variable
let number = 1;
// button variable
const addBox = document.querySelector('#add-box');
let boxes = () => {
	// variable for the div that we create on button click
	const box = document.createElement('div');

	// add a class attribute to the div
	box.setAttribute('class', 'box');
	// add a title attribute to the div
	box.setAttribute('title', "I'm a box");
	// change the text inside the div to the incremented number
	box.innerHTML = number++;
	// appending the newly created div to the body
	document.body.appendChild(box);
	// create an event listener for the box to delete the box when you click
	box.addEventListener('click', function(e) {
		e.target.remove();
	});
};

// event listener
addBox.addEventListener('click', boxes);
