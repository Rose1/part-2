import Header from "./Header"
import Part from "./Part"
const Course = ({ course}) => {
  return (
    <div>
      <Header header = {course.name}/>
      <Part parts = {course.parts}/>
    </div>
  )
}

export default Course