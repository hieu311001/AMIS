import axios from "axios";

export async function getEmployee(id) {
    let employees;

    await axios.get(`https://localhost:7050/api/v1/Employees/${id}`)
    .then(function (response) {
        employees = response.data;
    })
    .catch(function (error) {
        employees = error.response.status;
    })

    return employees;
}