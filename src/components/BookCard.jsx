function BookCard({ book }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={book.img} className="card-img-top" alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">${book.price}</p>
        <p className="card-text"><span className="text-muted">Category: {book.category}</span></p>
      </div>
    </div>
  );
}

export default BookCard;
