import React from 'react';
import Card from './components/Card';
import data from './data';
import "./App.css"

export default function SubCourseList({ location: { state: { courseId } }, history }) {
	const courses = data.courses[courseId];
	const onClick = (i) => {
		history.push({ pathname: '/course-intro', state: { courseId, subCourseId: i } });
	};
	return (
		<div>
			<p className="mb-1 topic-heading courses-heading">Sub Courses - {courses.name}</p>
			<div className="card-list">
				{courses.subCourses.map((info, i) => (
					<Card key={i} {...info} onClick={() => onClick(i)} />
				))}
			</div>
		</div>
	);
}