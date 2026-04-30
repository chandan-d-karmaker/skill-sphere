import React from 'react';

const CourseDetailsPage = async ({ params }) => {

    const { id } = await params;
    console.log(id);
    return (
        <div>
            <h3>Courses details page</h3>
            <p>Course ID: {id}</p>
        </div>
    );
};

export default CourseDetailsPage;