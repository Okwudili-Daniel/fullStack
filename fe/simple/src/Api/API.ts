import axios from "axios"

const URL: string = "http://localhost:5544/api/v1"

export const createTodo = async (data: any) =>{
  try {
    return await axios.post(`${URL}/create-todo`, data)
  } catch (error) {
    console.log(error)
  }
}

export const readAllTodo = async () =>{
  try {
    return await axios.get(`${URL}/read-all-todo`).then((res: any) =>{
      return res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const readTodo = async (taskId: string) =>{
  try {
    return await axios.get(`${URL}/read-todo/${taskId}`).then((res: any) =>{
      return res;
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateTodo = async (taskId: string) =>{
  try {
    return await axios.patch(`${URL}/update-todo/${taskId}`)
  } catch (error) {
    console.log(error)
  }
}