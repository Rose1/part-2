const Form = ({newName, handleAddName, addPerson, newPhone, handleAddPhone}) => {
    return (
        <form onSubmit={addPerson} action="">
          <div>
            Name: <input type="text" 
            value={newName} 
            onChange={handleAddName}/>
          </div>
          <div>
            Phone: <input type="number" 
            value={newPhone}
            onChange={handleAddPhone}
            />
          </div>
          <div>
            <button type='submit'>Add to Phonebook</button>
          </div>
        </form>
    )
}

export default Form
