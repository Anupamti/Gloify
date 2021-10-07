import styled from 'styled-components'

export const StatusbarPage = styled.div`
height:80px;
margin-top:1%;
border-bottom:0.5px solid #d4d4d4;
display:flex;
justify-content:first baseline;
align-items:flex-end;
padding-bottom:20px;
`;

export const StatusRight = styled.div`
flex:0.8;

   @media only screen and (max-width: 1171px) {
        margin-left:80px;
}

`;

export const StatusLeft = styled.div`
flex:0.2;
display:flex;
align-items:center;
cursor: pointer;

`;