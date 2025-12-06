const Numbers = (props) =>{
    //console.log(props)
    return (
        <div>
            <h3>Numbers</h3>
            <ul>
                {props.persons.map(person =>
                <li key={person.id}>{person.name} {person.phone}</li>
                )}
            </ul>
        </div>
    )
}
export default Numbers