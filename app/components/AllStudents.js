import React from 'react';

export default AllStudents = (props) => {

	return (

		<h1>All Students</h1>
		<ul>

		{
			students && students.map(student => (
				<li>{student.name}</li>
			))
		}

		</ul>

	)

};