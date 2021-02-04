import axios from 'axios'
const baseUrl = '/api/persons/'

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(res => res.data)
}

const create = newPerson => {
    return axios
        .post(baseUrl, {content:newPerson})
        .then(res => res.data)
}

const deletePerson = id => {
    return axios
        .delete(baseUrl+id)
        .then(()=> axios.get(baseUrl))
}

const updatePerson = (id, newName, newPhone) => {
    return axios.put(baseUrl+id, {name:newName, number:newPhone})
        .then(()=> axios.get(baseUrl))
}

const services = {getAll, create, deletePerson, updatePerson}

export default services