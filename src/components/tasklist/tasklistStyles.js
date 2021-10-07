import styled from 'styled-components'


export const TasklistPage = styled.div`
height:fit-content;
margin-top:40px;
margin-right:30px;
margin-left:30px;
`;

export const TaskListTop = styled.div`
 display:flex;
 justify-content:flex-start;
 align-items:center;
`;

export const SearchBar = styled.div`
    width:400px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:30px;
    cursor: pointer;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;

export const Inputfield = styled.input`
    flex:0.9;
    border:none;
    outline:none;
    font-size:17px;
`;

export const Addbutton = styled.button`
    width:200px;
    height:50px;
    padding:10px;
    border-radius:30px;
    cursor: pointer;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    margin-left:40px;
    outline:none;
    border:none;
    background-color:#3c40d6;
    color:white;
    font-size:17px;
    font-weight:500;
`;