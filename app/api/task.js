import axios from 'axios'

const taskApi = {
    createTask: async (data) => await axios.post('http://localhost:3000/api/v1/tasks', data),
    getAllTask: async () => await axios.get('http://localhost:3000/api/v1/tasks'),
    deleteTask: async (id) => await axios.delete(`http://localhost:3000/api/v1/tasks/${id}`),
    updateTask: async (id, data) => await axios.patch(`http://localhost:3000/api/v1/tasks/${id}`, data),
}

export default taskApi