import styled from 'styled-components'

interface Props {
	Fsize?: any;
}

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        margin-left: 5%;
    }
`;

export const ModalSign = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px 20px;

    @media(max-width: 800px) {
      padding: 30px 9px;
      margin-top: 285px;
    	margin-bottom: 50px;
    }
`;

export const Title = styled.h1<Props>`
    font-size: ${({ Fsize }) => Fsize ? `${Fsize}px` : 'auto'};
    text-transform: uppercase;
    text-align: center;
    strong {
        color: #4c1568;
    }
`;

export const Text = styled.p<Props>`
    text-align: center;
    font-size: 20px;
    color: #4c1568;
`

export const DivInput = styled.div`
    display: flex;
		@media(max-width: 800px){
			width: 100%;
			display: flex;
			flex-direction: column;
		}
`;

export const Input = styled.input`
    background-color: transparent;
    border: 1px solid #282c34;
    border-radius: calc(0.5 * var(--ntp-realbox-height));
    color: var(--search-box-text);
    font-family: inherit;
    font-size: inherit;
    outline: none;
    width: 100%;
    position: relative;
    margin: 5px 0px;
    border-radius: 5px;
    padding: 5px;
    @media(max-width: 800px){
        height: auto;
        font-size: 25px;
				width: 100%;
    }
    &:focus{
    background-color: #e8f0fe;
    }
`;

export const Formulary = styled.form`
    display: flex;
    flex-direction: column;
    margin: 25px 0;    
    & label {
      display: flex;
      text-transform: uppercase;
    }		
			@media(max-width:800px) {
				display: flex;
				flex-direction: column;
			}
    .DivInput {
      margin-right: 10px;
			@media(max-width: 800px) {
				width: 100%;
			}
    }
    .Select {
      width: 50%;
			@media(max-width: 800px) {
				width: 100%;
				height: 11vh;
				overflow: scroll;
			}
    }
    
    div {
      margin: 5px 0;
    }
`;

export const ButtonSignUp = styled.button`
    font-size: 20px;
    color: white;
    border: none;
    background: #4c1568;
    text-transform: uppercase;
    padding: 12px 0px;
    margin-top: 10px;
    font-weight: bold;
    width: 45%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-self: center;
		@media (max-width: 800px) {
			width: 200px;
		}
`;

export const Select = styled.select`
    background-color: transparent;
    border-radius: calc(0.5 * var(--ntp-realbox-height));
    color: var(--search-box-text);
    font-family: inherit;
    font-size: inherit;
    outline: none;
    width: 100%;
    position: relative;
    margin: 5px 0px;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #282c34;
    overflow: scroll;
    @media(max-width:800px){
      height: 60%;
      font-size: 16px;
      overflow: scroll;
    }
    &:focus{
    background-color: #e8f0fe;
    }
    `;