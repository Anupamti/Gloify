import styled from 'styled-components'

export const AppPage = styled.div`
display:flex;
height:fit-content;
font-family: "Nanum Gothic", sans-serif;

`;
export const ContainerRight = styled.div`
flex:0.9;
display:flex;
flex-direction:column;
margin-right:40px;

@media only screen and (max-width: 1171px) {
 flex:1
}

`;

export const ContainerLeft = styled.div`
flex:0.1;
display:flex;
justify-content:center;
align-items:center;
height:100vh;

@media only screen and (max-width: 1171px) {
    flex:none;
    width:600px;
    z-index:24;
    position:fixed;
    top:80px;
    left:${({ click }) => (click ? 0 : '-170%')};
    transition:all 500ms ease;
}
`;

export const MobileView = styled.div`
    display:none;
    @media only screen and (max-width: 1171px) {
        display:flex;
        position:fixed;
        top:40px;
        left:50px;
}
`;