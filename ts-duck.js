// Code here
// 1. We want way to randomly assign goose to one of the Ducks
var generateRandom = Math.floor(Math.random() * 15 + 1);
// 2. Get the ducks
var ducks = document.getElementsByClassName('duck');
// 3. Assign goose to the duck
ducks[generateRandom].id = 'goose';
// 4. Create list of the ducks that have been clicked
var clickedDucks = [];
// 5. Create the changeColor function
var changeColor = function (event) {
    if (event.target.classList.contains('duck')) {
        event.target.style.backgroundColor = 'green';
        clickedDucks.push(event.target);
    }
    if (event.target.id === 'goose') {
        clickedDucks.forEach(function (item) {
            item.style.backgroundColor = 'yellow';
        });
        event.target.style.backgroundColor = 'red';
        // location.reload();
    }
};
// 6. Add the changeColor function to the du(item => {
for (var _i = 0, ducks_1 = ducks; _i < ducks_1.length; _i++) {
    var i = ducks_1[_i];
    i.addEventListener('click', function (event) { return changeColor(event); });
}
