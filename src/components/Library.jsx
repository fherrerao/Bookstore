import Book from "./Book";

const Library = () => {
  const arrBooks = [
    {
      id: 1,
      category: "Comedy",
      title: "Wild",
      author: "Tom Sharpe",
    },
    {
      id: 2,
      category: "Action",
      title: "Mr. Mercedes",
      author: "Stephen King",
    },
    {
      id: 3,
      category: "horror",
      title: "Frankenstein",
      author: "Mary Shelley",
    },
  ];

  return (
    <ul>
      {arrBooks.map((item) => (
        <Book
          key={item.id}
          category={item.category}
          title={item.title}
          author={item.author}
        />
      ))}
    </ul>
  );
};

export default Library;
