import personService from '../services/persons'

const Person = ({person, setPersons, setNotification}) => {

    const deletePerson = () => {
        if(window.confirm(`Are you sure to delete ${person.name}`)){
            personService.deletePerson(person.id)
                .then((res) => {
                    setNotification({content:`${person.name} removed from phonebook`, error:false})
                    setTimeout(()=>{
                        setNotification({content:null, error:false})
                    }, 2000)
                    setPersons(res.data)
                })
                .catch(
                    setNotification({content:`${person.name} is already removed from phonebook, please refresh the page`, error:true})
                )
        }
    }

    return <li>{person.name}:{person.number} <button onClick={deletePerson}>delete</button></li>  
} 

const Persons = ({persons, setPersons, setNotification}) => <ul>{persons.map((person, idx)=><Person key={idx} person={person} setPersons={setPersons} setNotification={setNotification}/>)}</ul>

export default Persons