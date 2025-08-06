import React, { useState, useEffect } from 'react';
import './App.css';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  // State for controlling component visibility
  const [activeComponent, setActiveComponent] = useState('course');
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  // Sample data
  const courseData = {
    name: 'Angular',
    date: '4/5/2021',
    technology: 'Angular',
    duration: 'React',
    status: 'active'
  };

  const bookData = {
    title: 'Master React',
    pages: 670,
    category: 'programming',
    description: 'Deep Dive into Angular 11',
    price: 800,
    discount: 25,
    rating: 4.6,
    features: ['Mongo Essentials', 'Advanced React Patterns', 'State Management', 'Testing']
  };

  const blogData = {
    title: 'React Learning',
    author: { 
      name: 'Stephen Biz',
      bio: 'Senior Developer at Tech Corp',
      website: 'https://stephenbiz.dev'
    },
    content: 'Welcome to learning React!',
    featured: true,
    views: 1250,
    likes: 89,
    shares: 34,
    comments: [
      { author: 'Schwerzdenier', text: 'You can install React from npm.' },
      { author: 'John Doe', text: 'Great tutorial!' }
    ]
  };

  // Method 26: useEffect for conditional side effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Method 27: Dynamic component rendering with switch
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'course':
        return <CourseDetails isVisible={true} course={courseData} />;
      case 'book':
        return <BookDetails isVisible={true} book={bookData} showAdvanced={true} />;
      case 'blog':
        return <BlogDetails isVisible={true} blog={blogData} />;
      default:
        return <div>Select a component to view</div>;
    }
  };

  // Method 28: Array-based conditional rendering
  const renderAllComponents = () => {
    const components = [
      { id: 'course', component: <CourseDetails isVisible={true} course={courseData} /> },
      { id: 'book', component: <BookDetails isVisible={true} book={bookData} showAdvanced={true} /> },
      { id: 'blog', component: <BlogDetails isVisible={true} blog={blogData} /> }
    ];

    return components.map(({ id, component }) => (
      <div key={id} className="component-wrapper">
        {component}
      </div>
    ));
  };

  // Method 29: Conditional loading state
  if (loading) {
    return (
      <div className="App loading">
        <div className="loader">
          <h2>Loading BloggerApp...</h2>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  // Method 30: Simple conditional rendering
  return (
    <div className="App">
      <header className="app-header">
        <h1>BloggerApp - Conditional Rendering Demo</h1>

        {/* Navigation */}
        <nav className="navigation">
          <div className="nav-buttons">
            {['course', 'book', 'blog'].map(component => (
              <button
                key={component}
                className={`nav-btn ${activeComponent === component ? 'active' : ''}`}
                onClick={() => setActiveComponent(component)}
              >
                {component.charAt(0).toUpperCase() + component.slice(1)} Details
              </button>
            ))}
          </div>
          
          <button
            className={`view-toggle ${showAll ? 'active' : ''}`}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Individual' : 'Show All'}
          </button>
        </nav>
      </header>

      <main className="app-content">
        {/* Method 31: Conditional rendering based on view mode */}
        {showAll ? (
          <div className="all-components">
            {renderAllComponents()}
          </div>
        ) : (
          <div className="single-component">
            {renderActiveComponent()}
          </div>
        )}

        {/* Method 32: Conditional footer */}
        <footer className="app-footer">
          {/* Only show component count when showing all */}
          {showAll && (
            <p>Displaying all 3 components with various conditional rendering techniques</p>
          )}
          
          {/* Always show current selection when not showing all */}
          {!showAll && (
            <p>Currently viewing: {activeComponent.charAt(0).toUpperCase() + activeComponent.slice(1)} Details</p>
          )}
        </footer>
      </main>
    </div>
  );
}

export default App;
