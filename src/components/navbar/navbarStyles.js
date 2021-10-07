import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const NavbarPage = styled.div`
    height:90%;
    width:75%;
    background-color:#3c40d6;
    border-radius:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    
`;

export const NavTop = styled.div`
     display:flex;
    justify-content:center;
    align-items:center;
    
`;

export const NavBottom = styled.div`
   flex:0.7;
   display:flex;
   flex-direction:column;
   justify-content:space-evenly;
    width:100%;

 
`;

export const NavLogout = styled.div`
    flex:0.05;
    color:#b8b9e0;
    transition: all 500ms;  
    cursor: pointer;  
    

      &:hover{
            color:white;
    }

`;

export const SelectedIcon = styled.div`
    width:90%;
    color:white;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    border-top-left-radius:50px;
    border-bottom-left-radius:50px;
    color:gray;
    height:100%;
   
`;

export const Icons = styled.div`
    color:#b8b9e0;
    transition: all 500ms;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
     

      &:hover{
            color:white;
    }
`;


export const LinkContainer = styled(Link)`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    height:40px;
`;

export const TaskListBottom = styled.div`
display:flex;
justify-content:center;
align-items:center
`;