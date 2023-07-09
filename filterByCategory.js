
function productFilter(products){
    return function(category){
        return products.filter(product => product.category === category);

    }
}




// Example usage

const productsArray = [
    {name: "Jeans", category: "Clothing"},
    {name: "Shorts", category: "Clothing"},
    {name: "Laptop", category: "Electronics"},
    {name: "fairness cream", category: "cosmetic"},
    {name: "Twelth Fail", category: "book"},
    {name: "mobile", category: "Electronics"}
];

const filterByCategory = productFilter(productsArray);
const filteredProducts = filterByCategory('book');

console.log(filteredProducts);