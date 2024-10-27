import axion from 'ems-frontend\node_modules\axion'

const REST_API= 'http://localhost:8080/employees'

export const listEmpl = ()=>  axion.get(REST_API)