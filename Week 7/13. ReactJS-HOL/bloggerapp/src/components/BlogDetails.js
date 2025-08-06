import React, { useState } from 'react';

const BlogDetails = ({ isVisible, blog }) => {
  const [showComments, setShowComments] = useState(false);
  const [userRole, setUserRole] = useState('reader'); // reader, author, admin

  // Method 14: Component-level conditional rendering with hooks
  const [expandedSections, setExpandedSections] = useState({
    content: false,
    author: false,
    stats: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Method 15: Custom hook-like pattern for conditional rendering
  const conditionalRender = (condition, component) => {
    return condition ? component : null;
  };

  // Method 16: Higher-order conditional rendering
  const ConditionalWrapper = ({ condition, wrapper, children }) => {
    return condition ? wrapper(children) : children;
  };

  // Method 17: Render props pattern for conditional content
  const ConditionalContent = ({ condition, children, fallback }) => {
    return condition ? (typeof children === 'function' ? children() : children) : fallback;
  };

  // Method 18: Using optional chaining with conditional rendering
  const renderAuthorInfo = () => {
    return blog?.author?.name && (
      <div className="author-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('author')}
        >
          <h4>Author Information {expandedSections.author ? '▼' : '▶'}</h4>
        </div>
        
        {/* Method 19: State-based conditional rendering */}
        {expandedSections.author && (
          <div className="author-details">
            <p><strong>Name:</strong> {blog.author.name}</p>
            {blog.author.bio && <p><strong>Bio:</strong> {blog.author.bio}</p>}
            {blog.author.website && (
              <p><strong>Website:</strong> 
                <a href={blog.author.website} target="_blank" rel="noopener noreferrer">
                  {blog.author.website}
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  // Method 20: Role-based conditional rendering
  const renderActionButtons = () => {
    const buttonsByRole = {
      admin: ['Edit', 'Delete', 'Feature', 'Archive'],
      author: ['Edit', 'Update'],
      reader: ['Like', 'Share']
    };

    const availableButtons = buttonsByRole[userRole] || [];

    return (
      <div className="action-buttons">
        {availableButtons.map(action => (
          <button 
            key={action} 
            className={`btn btn-${action.toLowerCase()}`}
            onClick={() => console.log(`${action} clicked`)}
          >
            {action}
          </button>
        ))}
      </div>
    );
  };

  if (!isVisible) return null; // Early return

  return (
    <div className="blog-details">
      <h2>Blog Details</h2>
      
      {/* Role selector for demo */}
      <div className="role-selector">
        <label>View as: </label>
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
          <option value="reader">Reader</option>
          <option value="author">Author</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Method 21: ConditionalContent with render props */}
      <ConditionalContent 
        condition={!!blog} 
        fallback={<p>No blog selected</p>}
      >
        {() => (
          <div className="blog-content">
            <h3>{blog.title}</h3>
            <p className="blog-meta">By {blog.author?.name || 'Unknown'}</p>
            
            {/* Method 22: Conditional wrapper usage */}
            <ConditionalWrapper
              condition={blog.featured}
              wrapper={(children) => <div className="featured-badge">⭐ {children}</div>}
            >
              <span>Featured Post</span>
            </ConditionalWrapper>

            {/* Content section with toggle */}
            <div className="content-section">
              <div 
                className="section-header" 
                onClick={() => toggleSection('content')}
              >
                <h4>Content {expandedSections.content ? '▼' : '▶'}</h4>
              </div>
              
              {/* Method 23: Complex state-based rendering */}
              {expandedSections.content && (
                <div className="blog-text">
                  {blog.content || 'Welcome to learning React!'}
                </div>
              )}
            </div>

            {renderAuthorInfo()}

            {/* Stats section */}
            <div className="stats-section">
              <div 
                className="section-header" 
                onClick={() => toggleSection('stats')}
              >
                <h4>Statistics {expandedSections.stats ? '▼' : '▶'}</h4>
              </div>
              
              {expandedSections.stats && (
                <div className="blog-stats">
                  {/* Method 24: Using conditionalRender pattern */}
                  {conditionalRender(blog.views, <p>Views: {blog.views}</p>)}
                  {conditionalRender(blog.likes, <p>Likes: {blog.likes}</p>)}
                  {conditionalRender(blog.shares, <p>Shares: {blog.shares}</p>)}
                </div>
              )}
            </div>

            {/* Comments section */}
            <div className="comments-section">
              <button 
                className="toggle-comments"
                onClick={() => setShowComments(!showComments)}
              >
                {showComments ? 'Hide' : 'Show'} Comments
              </button>
              
              {/* Method 25: State-driven conditional rendering with animation classes */}
              <div className={`comments-container ${showComments ? 'expanded' : 'collapsed'}`}>
                {showComments && (
                  <div className="comments">
                    {blog.comments && blog.comments.length > 0 ? (
                      blog.comments.map((comment, index) => (
                        <div key={index} className="comment">
                          <strong>{comment.author}:</strong> {comment.text}
                        </div>
                      ))
                    ) : (
                      <p>No comments yet. Be the first to comment!</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {renderActionButtons()}
          </div>
        )}
      </ConditionalContent>
    </div>
  );
};

export default BlogDetails;
