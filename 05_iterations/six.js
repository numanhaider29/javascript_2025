const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "History", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "Science", publish: 2000, edition: 2010 },
  { title: "Book Four", genre: "Fantasy", publish: 1995, edition: 2005 },
  { title: "Book Five", genre: "Biography", publish: 1987, edition: 2001 },
  { title: "Book Six", genre: "Romance", publish: 2010, edition: 2015 },
  { title: "Book Seven", genre: "Thriller", publish: 1999, edition: 2009 },
  { title: "Book Eight", genre: "Adventure", publish: 2003, edition: 2013 },
  { title: "Book Nine", genre: "Horror", publish: 1984, edition: 1999 },
  { title: "Book Ten", genre: "Philosophy", publish: 1978, edition: 1990 }
];
const userbooks = books.filter((book)=>{
return book.genre === "Thriller"
})
console.log(userbooks);