import Header from "./Header"
import Part from "./Part"
import Total from "./Total"
const Course = ({ course}) => {
  return (
    <div>
      <Header header = {course.name}/>
      <Part parts = {course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
}

export default Course