import React from 'react';

const CourseDetailsPage = ({params}) => {
    return (
        <div>
            <h3>Courses details page</h3>
            <p>Course ID: {params.id}</p>
        </div>
    );
};

export default CourseDetailsPage;