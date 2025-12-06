import { useState } from 'react'
import Courses from './components/Courses'
import Note from './components/Note'
import Numbers from './components/Numbers'
import './App.css'
import Form from './components/Form'
import Filter from './components/Filter'

function App(props) {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      phone: '51987654321'
    },
    {
      id: 2,
      name: 'Sam Altman',
      phone: '145780661'
    },
    {
      id: 3,
      name: 'Mark Zuckerberg',
      phone: '5198765784200'
    },
    {
      id: 4,
      name: 'Jeff Bezos',
      phone: '458223554321'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const filteredNames = !filter ? persons : persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newPhone,
      id: persons.length +1 
    }
    const nameExists = persons.some(person => person.name === newName)
    console.log(nameExists)
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(personObject))
    console.log('person added')
    setNewName('')
    setNewPhone('')
  }

  const handleAddName = (event) => setNewName(event.target.value)
  const handleAddPhone = (event) => setNewPhone(event.target.value)
  const handleFilter = (event) => setFilter(event.target.value)

  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Communication with server',
          exercises: 9,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <div>
        <h2>Topic 1: Web development curriculum</h2>
        <Courses courses = {courses}/>
      </div>
      <div>
        <h2>Topic 2: Phonebook</h2>
        <Filter filter={filter} handleFilter={handleFilter} />
        <Form 
        newName={newName}
        handleAddName={handleAddName}
        handleAddPhone={handleAddPhone}
        newPhone={newPhone}
        addPerson={addPerson}
        />
        <Numbers persons={filteredNames} />

      </div>
    </div>
  )
}

export default App
