import styled from 'styled-components'

const Container = styled.header`
    background: white;
    height: 125px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 6%;

    @media (max-width : 800px){
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 0px 69px;
    }
`;

export const LogoIbav = styled.img`
    height: auto;
    width: 110px;
    padding: 14px 0px;
`;

export const BtnLink = styled.button`
    font-size: 16px;
    color: #0d2c7f;
    background: none;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    margin: 0px 30px;

    @media(max-width:800px){
        margin: 10px 0;
        font-size:18px;
    }
`;

export const DivBtn = styled.div`
    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
    }
`;

export const BtnSign = styled.button`
    font-size: 16px;
    color: white;
    border: none;
    background: #d51717;
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 12px;
    margin-top: 10px;
    cursor: pointer;

    @media(max-width: 800px) {
        margin-bottom: 10px;
        font-size: 18px;
    }
`;

export default Container;