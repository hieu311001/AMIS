import axios from "axios";

export async function getPosition(id) {
    let position;

    await axios.get(`https://cukcuk.manhnv.net/api/v1/Positions/${id}`)
    .then(function (response) {
        position = response.data;
    })
    .catch(function (error) {
        position = error.response.status;
    })

    return position;
}