interface Mountain {
	name: string;
	height: number;
}

const mountains = [
	{
		name: 'Kilamanjaro',
		height: 19341,
	},
	{
		name: 'Everest',
		height: 29029,
	},
	{
		name: 'Denali',
		height: 20310,
	},
];

function findNameOfTallestMountain(mtns: Mountain[]) {
	// use reduce because we need only one value
	const tallest = mtns.reduce((acc, curr) =>
		// if the starting height is greater than the current height return accordingly
		acc.height > curr.height ? acc : curr
	);

	console.log(tallest.name);
}
findNameOfTallestMountain(mountains);

// Part 2
interface Product {
	name: string;
	price: number;
}

const products: Product[] = [
	{
		name: 'Meletti',
		price: 10,
	},
	{
		name: 'Nonino',
		price: 15,
	},
	{
		name: 'Montenegro',
		price: 20,
	},
];

function calcAverageProductPrice(prods: Product[]) {
	// again reduce because we need one value
	//acc is NaN to start with, so it doesn't have a .price.
	const average = prods.reduce((acc, curr) => acc + curr.price, 0) / prods.length;

	console.log(average);
}

calcAverageProductPrice(products);

interface InventoryItem extends Product {
	quantity: number;
}

// Part 3
const inventory: InventoryItem[] = [
	{
		name: 'motor',
		price: 10.0,
		quantity: 10,
	},
	{
		name: 'sensor',
		price: 12.5,
		quantity: 4,
	},
	{
		name: 'LED',
		price: 1,
		quantity: 20,
	},
];

function calcInventoryValue(stock: InventoryItem[]) {
	const subTotals = stock
		// first get the totals of the individual items
		.map(items => items.price * items.quantity)
		// reduce to add everything in the subtotals array together.
		.reduce((acc, curr) => (acc += curr));

	console.log(subTotals);
}

calcInventoryValue(inventory);
