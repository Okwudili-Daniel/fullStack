import { useState } from 'react'
import styled from 'styled-components'
import { createTask } from '../Api/API'
import { useNavigate } from 'react-router-dom'

const AddTask = () => {
    const navigate = useNavigate()
    const [task,setTask]= useState("")
    const [urgency, setUrgency] = useState("")

  return (
    <div>
      <Container>
        <Main>
            <Input placeholder="Enter"
            value={task}
            onChange={(e:any)=>{
                setTask(e.target.value);
            }}
            />

            <Select
            value={urgency}
            onChange={(e:any) =>{
                setUrgency(e.target.value)
                console.log(urgency);
            }}
            >
                <Option value={"Important"}>Important</Option>
                <Option value={"Causal"}>Causal</Option>
                <Option value={"Fail"}>Fail</Option>
            </Select>

            <Button
                onClick={() =>{
                    console.log(task, urgency);
                    const id = Math.floor(Math.random() * new Date().getTime());
                    
                    const data = {
                        id,
                        time: new Date().getTime(),
                        urgency,
                        task
                    }

                    createTask(data).then(() =>{
                        navigate("/")
                    })

                }}
            >Add This Task</Button>
        </Main>
      </Container>
    </div>
  )
}

export default AddTask;
const Button = styled.div`
     width: 90%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid silver;
    outline: none;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 600;
    margin-top: 30px;
    background-color: black;
    color: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 360ms;

    &:hover{
        transform: scale(1.01);
        cursor: pointer;
    }
`
const Select = styled.select`
    width: 90%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid silver;
    outline: none;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 600;
`
const Option = styled.option``
const Input = styled.textarea`
  margin: 10px;
  outline: none;
  border-radius: 10px;
  height: 300px;
  width: 90%;
  resize: none;
  padding: 10px;
  border: 1px solid silver;
  font-family: Poppins;

  &::placeholder {
    font-family: Poppins;
  }
`;
const Main = styled.div`
  width: 70%;
  min-height: 500px;
  border-radius: 10px;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
`;
