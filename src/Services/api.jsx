import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://capstone-group2-alex-api.herokuapp.com',
})

export const apiSports = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
})
