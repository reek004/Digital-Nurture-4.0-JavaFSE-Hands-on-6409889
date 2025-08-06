import React from 'react';

const CourseDetails = ({ isVisible, course }) => {
  // Method 1: Early return (Guard Clause)
  if (!isVisible) {
    return null;
  }

  return (
    <div className="course-details">
      <h2>Course Details</h2>
      {/* Method 2: Ternary operator for content */}
      <h3>{course ? course.name : 'No Course Selected'}</h3>
      
      {/* Method 3: Logical AND (&&) operator */}
      {course && course.date && (
        <p className="course-date">{course.date}</p>
      )}
      
      {/* Method 4: Ternary with JSX blocks */}
      {course ? (
        <div className="course-info">
          <p><strong>Technology:</strong> {course.technology}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          {/* Method 5: Conditional class names */}
          <div className={`status ${course.status === 'active' ? 'active' : 'inactive'}`}>
            Status: {course.status}
          </div>
        </div>
      ) : (
        <div className="no-course">
          <p>Please select a course to view details</p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
