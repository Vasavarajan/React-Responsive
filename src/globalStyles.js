import styled,{createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
*
{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Lato', sans-serif;
}
`;
export const Container = styled.div`
    z-index:1;
    width:100%;
    max-width:1300px;
    margin-right:auto;
    margin-left:auto; 
    padding-right:20px;
    padding-left:10px;

    @media screen and (max-width:991px){
        padding-right:10px;
        padding-left:10px;
    }
`;

export const Button = styled.button`
    border-radius:4px;
    background:${({primary}) => (primary ? '#002FB5' : '#1846BB')};
    white-space:nowrap;
    padding:${({big}) => (big ? '12px 64px' : '10px 20px')};
    color:#fff;
    font-size:${({fontBig}) => (fontBig ? '20px': '16px')};
    outline:none;
    border:none;
    cursor:pointer;

    &:hover{
        transition: all 0.3s ease-out;
        background:#fff;
        background:${({primary}) => (primary ? '#1846BB' : '#002FB5')};

    }

    @media screen and (max-width:960px){
        width:100%;
    }
`


export default GlobalStyle;