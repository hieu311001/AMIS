import axios from "axios";

/**
 * Call API add employee
 * @param {Dữ liệu nhân viên cần thêm} data 
 * @returns Status code
 * Created by VMHieu 07/08/2022
 */
export async function addEmployee(data) {
    let status;

    await axios.post(`https://cukcuk.manhnv.net/api/v1/Employees`, data)
    .then(function (response) {
        status = response.status;
    })
    .catch(function (error) {
        status = error.response.status;
    })

    return status;
}

/**
 * Call API edit employee
 * @param {Dữ liệu nhân viên cần sửa} data 
 * @param {ID của nhân viên cần sửa} id 
 * @returns 
 * Created by VMHieu 07/08/2022
 */
export async function editEmployee(data, id) {
    let status;

    await axios.put(`https://cukcuk.manhnv.net/api/v1/Employees/${id}`, data)
    .then(function (response) {
        status = response.status;
    })
    .catch(function (error) {
        status = error.response.status;
    })

    return status;
}