import axios from "axios";

export async function loadEmployees() {
    let employees;

    await axios.get(`https://cukcuk.manhnv.net/api/v1/Employees`)
    .then(function (response) {
        employees = response.data;
    })
    .catch(function (error) {
        employees = error.response.status;
    })

    return employees;
}