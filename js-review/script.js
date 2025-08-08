const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}
data;
getBooks();

function getBook(id) {
  return data.find((d) => d.id === id); //  find returns the first element that satisfies the condition and the condition here is // that the id of the element is equal to the id passed as an argument
  // if no element is found, it returns undefined
}

// Destructuring Objects
/*const book = getBooks();
book;

const someBook = getBook(3); // this will return undefined because the id is not a string, it is a number
someBook;

const title = someBook.title;
title;

const author = someBook.author;
author;

const { publicationDate, genres, pages, hasMovieAdaptation } = someBook;
publicationDate, genres, pages, hasMovieAdaptation;

console.log(publicationDate, genres, pages, hasMovieAdaptation);

// Destructuring Arrays (instead of relying on property names, we now rely on the order of elements in the array)
//const primaryGenre = genres[0];
//const secondaryGenre = genres[1];

//console.log(primaryGenre, secondaryGenre);

//const [moreGenreA, moreGenreB] = genres.slice(2, 4); // slice returns a new array with the elements from index 2 to index 4 (exclusive)
//console.log(moreGenreA, moreGenreB);
const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // ...otherGenres collects the rest of the elements into an array
console.log(primaryGenre, secondaryGenre, otherGenres);

// the spread operator: can be used to create a new array with the elements of an existing array
const newGenres = [...genres, "epic fantasy", "magic realism"]; // creates a new array with the elements of genres and adds two new elements
console.log(newGenres);

// the spread operator on objects: the spread operator can also be used to create a new object with the properties of an existing object
//const updatedBook = { book, moviePublicationDate: "2001-12-19" };
//updatedBook;
const updatedBook = {
  // using the spread operator to copy properties from the book object
  ...book,

  // adding a new property
  moviePublicationDate: "2001-12-19",

  // updating/overwriting an existing property
  pages: 1500,
};
console.log(updatedBook);

// using template literals
const summary = `${title} by ${author} was published on ${
  publicationDate.split("-")[0] // splitting the date string to get the year using split method (symbol - is used to split the string) and accessing the first element of the resulting array
}. It has ${pages} pages and belongs to some genres: ${genres.join()}.`;
const adaptation = `The book has ${
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie.`;
console.log(adaptation);
console.log(summary);

// Ternaries instead of if-else statements
//condition ? expressionIfTrue : expressionIfFalse;
const pagesRange =
  pages > 1000 ? "More than 1000 pages" : "Less than or equal to 1000 pages";
pagesRange;
console.log(`The book with title ${title} has ${pagesRange}.`);

// using arrow functions
// we will start by writing a function that takes in a value that is supposed to be a date and returns the year
function getYear(str) {
  return str.split("-")[0]; // splitting the string and returning the first element
}
console.log(getYear(publicationDate)); // calling the function with the publicationDate property of the book object
// now we will rewrite the function using an arrow function
str: (getYear) => str.split("-")[0]; // this is the same as the above function but using arrow function syntax
console.log(getYear(publicationDate)); // calling the arrow function with the publicationDate property of the book object

// Short circuiting and logical operators
// Short-circuiting is a feature of logical operators that allows us to evaluate expressions in a way that avoids unnecessary computations.
// the logical AND (&&) operator returns the second opearand (item) if the first operand (condition) is true, otherwise it returns the first operand (condition).
console.log(true && "Some string"); // this will return "Some string" because the first operand is true
console.log(false && "Some string"); // this will return false because the first operand is false
// if there is a satisfaction of the two conditions, the second operand will be returned.
console.log(hasMovieAdaptation && "The book has been adapted as a movie."); // this will return the string because hasMovieAdaptation is true

// falsy values in JavaScript are values that evaluate to false in a boolean context. The falsy values are: false, 0, "", null, undefined, and NaN.
console.log("Jonas" && "Some string"); // this will return "Some string" because the first operand is a truthy value (non-empty string)
console.log(0 && "Some string"); // this will return 0 because the first operand is falsy (0)

// the logical OR (||) operator returns the first operand (item) if it is true or a truthy value, otherwise it returns the second operand (default value).
console.log(true || "Some string"); // this will return true because the first operand is true
console.log(false || "Some string"); // this will return "Some string" because the first operand is false
//console.log(hasMovieAdaptation || "The book has not been adapted as a movie."); // this will return true because hasMovieAdaptation is true
console.log(someBook.translations.spanish); // this will return an empty string because the spanish translation is not available

//let's set a default value for the spanish translation if it is not available
const spanishTranslation = someBook.translations.spanish || "NOT AVAILABLE";
spanishTranslation; // this will return "NOT AVAILABLE" because the spanish translation is an empty string which is a falsy value stored in the spanishTranslation variable

//console.log(someBook.reviews.librarything.reviewsCount);
//const countWrong = someBook.reviews.librarything.reviewsCount || "no data"; // this will return "no data" because the reviewsCount is 0 which is a falsy value, but this is not the desired behavior because we want to return 0 if the reviewsCount is 0, not "no data". To fix this, we can use the nullish coalescing operator (??) which returns the right operand only if the left operand is null or undefined.

// the nullish coalescing operator (??) is a logical operator that returns the right operand only if the left operand is null or undefined, otherwise it returns the left operand.
//const count = someBook.reviews.librarything.reviewsCount ?? "no data"; // this will return 0 because the reviewsCount is 0 which is not null or undefined
//count; // this will return 0

// Optional chaining (?.) is a feature that allows us to access properties of an object without having to check if the object is null or undefined. It returns undefined if the object is null or undefined, otherwise it returns the value of the property.
// let's create a function that will return total reviews count from both goodreads and librarything
function getTotalReviewCount(someBook) {
  const goodreadsCount = someBook.reviews?.goodreads?.reviewsCount;
  const librarythingCount = someBook.reviews?.librarything?.reviewsCount ?? 0; // using optional chaining to access the reviewsCount property of librarything, and if it is not available, we return 0 using the nullish coalescing operator because we set the default value for unavailability to 0
  librarythingCount; // undefined because librarything is not available for some books
  return goodreadsCount + librarythingCount; // this will return the sum of the reviewsCount from both goodreads and librarything
}
console.log(getTotalReviewCount(someBook)); // this will return the sum of the reviewsCount from both goodreads and librarything
*/

// The array map method (from map, filter and reduce): is used to create a new array by applying a function to each element of the original array. It does not modify the original array, but instead returns a new array with the results of the function applied to each element.
// basically, the map method will loop through an array and return a new array of the same length of the original array and the elements of the new array will be the result of the function applied to each element of the original array.
/*
const books = getBooks();

const x = [1, 2, 3, 4, 5];
const doubled = x.map((el) => el * 2); // this will return a new array with the elements of x multiplied by 2
console.log(doubled); // [2, 4, 6, 8, 10]

// now we want to create a new array that has all the titles of the books in the books array
const titles = books.map((book) => book.title);
console.log(titles); // this will return an array with the titles of the books

// now we want to create a new array that has essential information about the books, like title, author, and publication date
const essentialInfos = books.map((book) => ({
  title: book.title,
  author: book.author,
  publicationDate: book.publicationDate.split("-")[0], // extracting the year from the publication date
}));
console.log(essentialInfos); // this will return an array of objects with the essential information about the books

// The array filter method: is used to create a new array with all the elements that pass a test implemented by a provided function. It does not modify the original array, but instead returns a new array with the elements that satisfy the condition.
// let's create an array of books that have more than 500 pages
const longBooksWithMovieAdaptations = books
  .filter((book) => book.pages > 500) // filtering the books array to get only the books that have more than 500 pages
  .filter((book) => book.hasMovieAdaptation); // filtering again to get only the books that have a movie adaptation from the previously filtered array of 500+ pages books
longBooksWithMovieAdaptations;

const adventureBooks = books.filter((book) =>
  book.genres.includes("adventure")
); // filtering the books array to get only the books that have "adventure" in their genres
adventureBooks;
// now we want to create a new array that has the titles of the adventure books
const adventureTitles = adventureBooks.map((book) => book.title);
adventureTitles;

// The array reduce method: is used to execute a reducer function on each element of the array, resulting in a single output value. It can be used to accumulate values, such as summing numbers or concatenating strings.
const pagesAllBooks = books.reduce(
  (accumulator, book) => accumulator + book.pages,
  0
); // the second argument is the initial value of the accumulator, which is 0 in this case
pagesAllBooks; // this will return the total number of pages of all the books in the books array

// The array sort method: is used to sort the elements of an array in place and returns the sorted array. The sort method takes a compare function as an argument that defines the sort order.
const arr = [3, 7, 1, 4, 2, 6, 5]; // we want to sort this array in ascending order
const sortedArr = arr.sort((a, b) => a - b); // the compare function takes two arguments and returns a negative number if a should come before b, a positive number if a should come after b, and 0 if they are equal
sortedArr; // this will return the sorted array [1, 2, 3, 4, 5, 6, 7]

const negArr = [3, 7, 1, 4, 2, 6, 5]; // we want to sort this array in descending order
const sortedNegArr = arr.sort((a, b) => b - a); // the compare function takes two arguments and returns a negative number if b should come before a, a positive number if b should come after a, and 0 if they are equal
sortedNegArr;
negArr; // this will return the sorted array [7, 6, 5, 4, 3, 2, 1]
// both the sorted array and the original array are sorted in place, meaning that the original array is modified and the sorted array is the same as the original array.
// hence, the sort method is not a functional programming method, it is a mutating method that modifies the original array. so how we can fix the original not being changed is that we can use the spread operator to create a new array with the elements of the original array and then sort that new array.
const newArr = [3, 7, 1, 6, 8];
const sortedNewArr = newArr.slice().sort((a, b) => a - b);
sortedNewArr;
newArr;

//now let's sort the books in order of their pages using the sort method on arrays
const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;
const titlesOfSortedPages = sortedByPages.map((book) => book.title);
titlesOfSortedPages;

// Working with Immutable arrays
// 1.) Add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  Author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;
// 2.) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;
// 3.) Update a book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : books
);
console.log(booksAfterUpdate);
*/

//Asynchronous JavaScript: Promises
// we will look into how to fetch data, how to load data from an external web API, and how to handle errors in asynchronous code using promises.
// Fetching data from an API using the Fetch API
// A Promise can have three states: pending, fulfilled, or rejected. each state represents a different stage in the lifecycle of the Promise.
// e.g when we fetch data from an API, the Promise is in the pending state until the data is fetched, then it is either fulfilled with the data or rejected with an error if something goes wrong.
// how do we do something when the data we are fetching has arrived? we can use the .then() method on the Promise returned by the fetch() function. The .then() method takes a callback function that will be called when the Promise is fulfilled, and it receives the data as an argument.
// A callback function is a function that is passed as an argument to another function, and is intended to be executed after the completion of that other function. It's a way to defer the execution of a piece of code until a specific event or condition occurs.
//fetch("https://jsonplaceholder.typicode.com/todos") // fetching data from the API
//  .then((response) => response.json()) // converting the response gotten from the API to JSON format
//  .then((data) => console.log(data)); // logging the data to the console so we can see the result

//console.log("Gidy"); // this will be logged to the console before the data is logged because the fetch() function is asynchronous, meaning that it does not block the execution of the code that comes after it. The code after the fetch() function will be executed immediately, while the fetch() function will continue to run in the background until it is done fetching the data.

// Error handling in asynchronous code using Promises
// we can handle errors in asynchronous code using the .catch() method on the Promise. The .catch() method takes a callback function that will be called if the Promise is rejected, and it receives the error as an argument.
//fetch("https://jsonplaceholder.typicode.com/todos")
//  .then((response) => response.json())
//  .then((data) => console.log(data))
//  .catch((error) => console.error("Error fetching data:", error)); // logging the error to the console if something goes wrong

// Async/Await: a more modern way to write asynchronous code that makes it look like synchronous code
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos"); // fetching data from the API using the await keyword, which pauses the execution of the function until the Promise is fulfilled
  const data = response.json(); // converting the response to JSON format
  console.log(data); // logging the data to the console

  return data; // returning the data so we can use it later
}

getTodos();
