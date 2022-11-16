import styled from "styled-components";
import HomeComponent from "./modules/home";
 
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:30px 0 10px;
font-family: 'Poppins', sans-serif;
`;

const Header=styled.span`
color:#000;
font-size:25px;
font-weight:bold; 
`;

function App() {

  // hello how are  you 
  return (
    <Container>  
    <Header>Expense Tracker</Header>
    <HomeComponent /> 
    </Container>
  );
}

export default App;
