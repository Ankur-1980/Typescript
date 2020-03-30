var mountains = [
    {
        name: 'Kilamanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    },
];
function findNameOfTallestMountain(mtns) {
    // use reduce because we need only one value
    var tallest = mtns.reduce(function (acc, curr) {
        // if the starting height is greater than the current height return accordingly
        return acc.height > curr.height ? acc : curr;
    });
    console.log(tallest.name);
}
findNameOfTallestMountain(mountains);
var products = [
    {
        name: 'Meletti',
        price: 10
    },
    {
        name: 'Nonino',
        price: 15
    },
    {
        name: 'Montenegro',
        price: 20
    },
];
function calcAverageProductPrice(prods) {
    // again reduce because we need one value
    //acc is NaN to start with, so it doesn't have a .price.
    var average = prods.reduce(function (acc, curr) { return acc + curr.price; }, 0) / prods.length;
    console.log(average);
}
calcAverageProductPrice(products);
var inventory = [
    {
        name: 'motor',
        price: 10.0,
        quantity: 10
    },
    {
        name: 'sensor',
        price: 12.5,
        quantity: 4
    },
    {
        name: 'LED',
        price: 1,
        quantity: 20
    },
];
function calcInventoryValue(stock) {
    var subTotals = stock
        // first get the totals of the individual items
        .map(function (items) { return items.price * items.quantity; })
        // reduce to add everything in the subtotals array together.
        .reduce(function (acc, curr) { return (acc += curr); });
    console.log(subTotals);
}
calcInventoryValue(inventory);
