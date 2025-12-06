const Filter = ({filter, handleFilter}) => {
    return (
        <div>
          Filter shown with <input type="text" 
          value={filter}
          onChange={handleFilter}
          />
        </div>
    )
}

export default Filter
