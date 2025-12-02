import Header from "./Header"
import Part from "./Part"
import Total from "./Total"
const Courses = ({ courses}) => {
  return (
    <div>
      <ul>
        <div>
          {courses.map ((course) => (
            <div key={course.id}>
                <Header header={course.name} />
                <Part parts={course.parts} />
                <Total parts={course.parts} />
            </div>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Courses