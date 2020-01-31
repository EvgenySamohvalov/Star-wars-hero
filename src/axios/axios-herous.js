import axios from 'axios'

export default axios.create({
  baseURL: 'https://swapi.co/api/people/'
  // baseURL: 'https://starwars-visualguide.com/#/characters?page=1/'
})