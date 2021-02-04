import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {
    
    const [ persons, setPersons ] = useState([]) 
    const [notification, setNotification] = useState({content:null, error:false})
    
    const fetchData = () => {
        personService.getAll()
            .then(response => setPersons(response))
    }

    useEffect(fetchData, [])

    const [filter, setFilter] = useState('')
    const [filteredPersons, setFilteredPersons] = useState(persons)

    return (
        <div>
            <h2>Phonebook</h2>

            <Notification notification={notification} setNotification={setNotification}/>

            <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification}/>

            <h3>Filterer </h3>
            <Filter filters = {{filter, setFilter, setFilteredPersons, persons}} />

            <h3>Numbers</h3>
            {filter === '' ? <Persons persons={persons} setPersons={setPersons} setNotification={setNotification}/> : <Persons persons={filteredPersons} setNotification={setNotification}/>}
        </div>
    )
}

export default App