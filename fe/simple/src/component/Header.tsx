import styled from 'styled-components';
import img from "../assets/CodeLab Best Logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
            <Link to="/">
            <Logo src={img}/>
            </Link>

            <Button to="/add-task">Add Task</Button>
        </Main>
      </Container>
    </div>
  )
}

export default Header;
const Button = styled(Link)`
    text-decoration: none;
    color: white;
    background-color: black;
    padding: 10px 30px;
    border-radius: 30px;

    transition: all 360ms;
    &:hover{
        transform: scale(1.02);
    }
`
const Logo = styled.img`
    height: 40px;
`
const Main = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
`
