import axios from "axios";

const ulrBase = "http://localhost:3001/persons";

const getAll = () => {
    const res = axios.get(ulrBase);
    return res.then((res) => res.data);
};

const create = (data) => {
    return axios.post(ulrBase, data).then((res) => res.data);
};

const delet = (id) => {
    return axios.delete(`${ulrBase}/${id}`);
};

const updatePerson = (id, data) => {
    return axios.put(`${ulrBase}/${id}`, data);
};

export default { getAll, create, delet, updatePerson };
