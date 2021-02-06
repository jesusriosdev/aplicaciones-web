var articles = [
    { name: "Xbox Series X", price: 500 },
    { name: "PlayStation 5 Digital", price: 400 },
    { name: "Xbox Series S", price: 300 },
    { name: "Nintendo Switch", price: 300 },
    { name: "Gamer PC", price: 1100 }
];

var filtered_articles = articles.filter(function(article) {
    return article.price <= 400; // Returns original item but only if the condition applies.
});

var mapped_articles = articles.map(function(article) {
    return article.name; // Returns exact number of items, can be modified.
});

var found_article = articles.find(function(article) {
    return article.name === "Nintendo Switch"; // Returns the found object.
});

// Difference: Filter return an array of found object, while Find returns the found object (the first one if there's more than one).
var filter_switch = articles.filter(function(article) {
    return article.name === "Nintendo Switch";
});
var find_switch = articles.find(function(article) {
    return article.name === "Nintendo Switch";
});

// Return name of articles.
articles.forEach(function(article) {
    console.log(article.name);
});

// Returns only true or false based on condition.
var cheaper_articles = articles.some(function(article) {
    return article.price <= 100;
});