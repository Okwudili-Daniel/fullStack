import styled from 'styled-components';
import react, {useState, useEffect} from 'react';
import { AiOutlineClose } from "react-icons/ai";
import moment from "moment";
import { getTask } from '../Api/API';

const HomePage = () => {

    const [state, setState] = useState([])

    useEffect(() =>{
        getTask().then((res) =>{
            setState(res)
        })
    }, [])
  return (
    <div>
      <Container>
        <Main>
            {state?.map((props: any) =>(
                <Card key={props.id}>
                <Right>
                    <Text>{props.text}</Text>

                    <Both>
                        <View>{props.urgency}</View>
                        <Time>{moment(props.time).fromNow()}</Time>
                    </Both>
                </Right>

                <Left>
                    <Close>
                        <Div>
                            <AiOutlineClose />
                        </Div>
                    </Close>
                    <Edit>Edit</Edit>
                </Left>

            </Card>
            ))}
        </Main>
      </Container>
    </div>
  )
}

export default HomePage;
const Div= styled.div``
const Time = styled.div`
  margin-right: 20px;
`;
const View = styled.div`
  flex: 1;
`;
const Edit = styled.div`
  background-color: black;
  color: white;
  padding: 5px 18px;
  font-size: 15px;
  border-radius: 30px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  /* width: 50px; */
`;
const Close = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  &:hover {
    ${Div} {
      transform: rotate(90);
    }
    cursor: pointer;
  }
`;
const Both = styled.div`
  display: flex;
  font-size: 12px;
`;
const Text = styled.div`
  font-size: 12px;
  flex: 1;
`;
const Right = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Card = styled.div`
  width: 300px;
  min-height: 200px;
  border-radius: 5px;
  border: 1px solid silver;
  padding: 5px;
  display: flex;
  margin: 10px;
`;

const Main = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
`;
