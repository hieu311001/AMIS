import axios from "axios";

/**
 * Call API add employee
 * @param {Dữ liệu nhân viên cần thêm} data 
 * @returns Status code
 * Created by VMHieu 07/08/2022
 */
export async function addEmployee(data) {
    let status;

    await axios.post(`https://localhost:7050/api/v1/Employees`, data)
    .then(function (response) {
        status = response;
    })
    .catch(function (error) {
        status = error.response;
    })

    return status;
}

/**
 * Call API edit employee
 * @param {Dữ liệu nhân viên cần sửa} data 
 * @param {ID của nhân viên cần sửa} id 
 * @returns Status code
 * Created by VMHieu 07/08/2022
 */
export async function editEmployee(data, id) {
    let status;

    await axios.put(`https://localhost:7050/api/v1/Employees/${id}`, data)
    .then(function (response) {
        status = response.status;
    })
    .catch(function (error) {
        status = error.response.status;
    })

    return status;
}

/**
 * Call API xóa nhân viên
 * @param {Id nhân viên cần xóa} id 
 * @returns Status code
 * Created by VMHieu 09/08/2022
 */
export async function deleteEmployee(id) {
    let status;

    if(id){
        await axios.delete(`https://localhost:7050/api/v1/Employees/${id}`)
        .then(function (response) {
            status = response.status;
        })
        .catch(function (error) {
            status = error.response.status;
        })
    }

    return status;
}

/**
 * Call api xóa nhiều bản ghi cùng lúc
 * @param {Mảng id của nhân viên cần xóa} dataId 
 * @returns Status code
 * CreatedBy VMHieu 09/09/2022
 */
export async function deleteMultiple(dataId) {
    let status;

    if(dataId){
        await axios.delete(`https://localhost:7050/api/v1/Employees/deleteMultiple?ids=${dataId}`)
        .then(function (response) {
            status = response.status;
        })
        .catch(function (error) {
            status = error.response.status;
        })
    }

    return status;
}

