const Part = ({parts}) => {
    
    return (
        <div>
            <ul>
                { parts.map( part => 
                    <li key={part.id}> {part.name} {part.exercises}</li>
                )}
            </ul>
        </div>
    )
}

export default Part
