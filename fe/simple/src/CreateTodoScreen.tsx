import { useState } from "react";
import styled from "styled-components";
import {GiCancel} from "react-icons/gi"
import { createTodo } from "./Api/API";

interface iProps {
    toggle: any;
    setToggle: any
}

const CreateTodoScreen: React.FC<iProps> = ({toggle, setToggle}) => {
    const [text, setText] = useState("")
    const [timer, setTimer] = useState<number>(0)

  return (
    <div>
      <Container>
        <Card>
            <div style={{cursor: "pointer"}}
            onClick={() => {
                setToggle(false);
              }}
            >
                <GiCancel/>
            </div>
            <Hold>
                <Text
                placeholder="Enter your Task for today..."
                value={text}
                onChange={(e: any) =>{
                  setText(e.target.value);
                }}
                // onClick={(e: any) =>{
                // setText(e.target.value);
                // }}  
                />
                <Timer
                type="number"
                placeholder="Enter your time in minutes"
                value={timer}
                onChange={(e: any) =>{
                  setTimer(e.target.value)
                }}
                // onClick={(e: any) =>{
                //     setTimer(e.target.value);
                // }}
                />
                <Button
                onClick={() =>{
                    let data = {
                        task: text,
                        timer
                    };
                    createTodo(data);
                    setToggle(false);
                }}
                >
                    Add to do
                </Button>
            </Hold>
        </Card>
        <Main
        onClick={() => {
            setToggle(false);
          }}
        >
        </Main>
      </Container>
    </div>
  )
}

export default CreateTodoScreen;
const Button = styled.div`
    background-color: purple;
  padding: 10px 15px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`
const Timer = styled.input`
color: black;
     height: 50px;
  width: 100%;
  background-color: white;
  padding-left: 5px;
  border-radius: 5px;
`
const Text = styled.textarea`
color: black;
    height: 50%;
    padding: 10px;
    resize: none;
    width: 100%;
    border-radius: 5px;
    background-color: white;
`
const Hold = styled.div`
    height: 90%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
const Card = styled.div`
    width: 500px;
    height: 450px;
    background-color: white;

    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`
const Main = styled.div``
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;

    background: rgba(144, 19, 254, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`
