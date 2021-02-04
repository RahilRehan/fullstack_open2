const Filter = ({filters}) => {
    const {filter, setFilter, setFilteredPersons, persons} = filters
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
        setFilteredPersons(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }
    return <p>Filter By: <input onChange={handleFilterChange} value={filter}></input></p>
}

export default Filter