import React from 'react';

const BookDetails = ({ isVisible, book, showAdvanced }) => {
  // Method 6: Function-based conditional rendering
  const renderBookContent = () => {
    if (!book) return <p>No book data available</p>;
    
    return (
      <>
        <h3>{book.title}</h3>
        <p><strong>Pages:</strong> {book.pages}</p>
        
        {/* Method 7: Switch-case equivalent with object mapping */}
        <div className="book-category">
          <span className={`category-badge ${getCategoryClass(book.category)}`}>
            {book.category}
          </span>
        </div>
        
        {/* Method 8: Multiple conditions with logical operators */}
        {showAdvanced && book.description && (
          <div className="book-description">
            <p>{book.description}</p>
          </div>
        )}
        
        {/* Method 9: Conditional rendering with arrays */}
        {book.features && book.features.length > 0 && (
          <div className="book-features">
            <h4>Features:</h4>
            <ul>
              {book.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };

  // Helper function for category classes
  const getCategoryClass = (category) => {
    const categoryMap = {
      'programming': 'prog-category',
      'design': 'design-category',
      'business': 'business-category'
    };
    return categoryMap[category] || 'default-category';
  };

  // Method 10: Inline function for conditional rendering
  const renderPriceInfo = () => {
    return book && book.price ? (
      <div className="price-info">
        <span className={`price ${book.discount ? 'discounted' : ''}`}>
          ${book.price}
        </span>
        {/* Method 11: Nested ternary (use sparingly) */}
        {book.discount ? (
          <span className="discount">
            {book.discount > 20 ? 'Great Deal!' : 'Good Price!'}
          </span>
        ) : null}
      </div>
    ) : null;
  };

  // Method 12: Using IIFE (Immediately Invoked Function Expression)
  return isVisible ? (
    <div className="book-details">
      <h2>Book Details</h2>
      {renderBookContent()}
      {renderPriceInfo()}
      
      {/* Method 13: IIFE for complex conditional logic */}
      {(() => {
        if (!book) return null;
        if (book.rating >= 4.5) return <div className="bestseller">⭐ Bestseller!</div>;
        if (book.rating >= 4.0) return <div className="popular">📚 Popular Choice</div>;
        return <div className="standard">📖 Good Read</div>;
      })()}
    </div>
  ) : null;
};

export default BookDetails;
