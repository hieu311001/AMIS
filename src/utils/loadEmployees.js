import axios from "axios";

/**
 * Call api lấy toàn bộ bản ghi nhân viên
 * @returns Status code
 * CreatedBy VMHieu 09/08/2022
 */
export async function loadEmployees() {
    let employees;

    await axios.get(`https://localhost:7050/api/v1/Employees`)
    .then(function (response) {
        employees = response.data;
    })
    .catch(function (error) {
        employees = error.response.status;
    })

    return employees;
}

/**
 * Call api lấy mã code lớn nhất + 1
 * @returns Status code
 * CreatedBy VMHieu 09/08/2022
 */
 export async function getEmployeeMaxCode() {
    let employees;

    await axios.get(`https://localhost:7050/api/v1/Employees/new-code`)
    .then(function (response) {
        employees = response.data;
    })
    .catch(function (error) {
        employees = error.response.status;
    })

    return employees;
}