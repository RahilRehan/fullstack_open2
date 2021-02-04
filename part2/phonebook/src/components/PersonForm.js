import {useState} from 'react'
import personService from '../services/persons'

const PersonForm = ({persons, setPersons, setNotification}) => {

    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }
    const addPerson = (event) => {
        event.preventDefault()
        for(let person of persons){
            if(person.name.toLowerCase().includes(newName.toLowerCase())){
                let confirmation = window.confirm(`${newName} already exists in Phonebook, replace the old number with the new one?`)
                if(confirmation){
                    personService.updatePerson(person.id, newName, newPhone)
                        .then((res)=>{
                            setNotification({content:`Phone number changed for ${newName}`, error:false})
                            setTimeout(()=>{
                                setNotification({content:null, error:false})
                            }, 2000)
                            setPersons(res.data)
                        })
                    return
                }
                return
            }
        }
        let newPerson = {name:newName, number:newPhone}

        personService.create(newPerson)
            .then(createdPerson => setPersons(persons.concat(createdPerson)))
            .then(() => {
                setNotification({content:`${newName} added to phonebook`, error:false})
                setTimeout(()=>{
                    setNotification({content:null, error:false})
                }, 2000)
            })

    }

    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input onChange={handleNameChange} value={newName}/>
            </div>
            <br/>
            <div>
                Phone: <input onChange={handlePhoneChange} value={newPhone}/>
            </div>
            <br/>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm