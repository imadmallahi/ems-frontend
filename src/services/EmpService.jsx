import axios from 'axios';



const REST_API= 'http://localhost:8081/api/employees'

export const listEmpl = ()=> axios.get(REST_API)
