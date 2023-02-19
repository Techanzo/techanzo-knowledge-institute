import Course from './Course';
import data from './data.json';
import { deepInjectSequenceNum } from './helpers';

const courses = deepInjectSequenceNum(data.courses);

const Home = () => {
  return (
    <>
      {courses.map((course) => (
        <Course key={course.name} course={course} />
      ))}
    </>
  );
};

export default Home;
