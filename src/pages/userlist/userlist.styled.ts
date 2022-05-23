import styled from "styled-components";

interface Props {
  display?: any;
  marginLeft?: any;
}


const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
		padding: 0 5px;
  }
`

export const Loading = styled.div`
& img{
  margin: 50px 0;
  width: 100px;
  height: 100px;
}
  @media (max-width: 800px) {
    margin: 190px;
		margin-top: -100px;
  }
`

export const Describe = styled.td<Props>`
  width: 20%;
  text-align: left;
  margin-left: 20px;
  @media (max-width: 800px) {
    display: ${({ display }) => display && `${display}`};
    margin-left: ${({ marginLeft }) => marginLeft && `${marginLeft}`};
    width: 25%;
  }
`;

export const ListDescribe = styled.td<Props>`
  color: white;
  text-transform: uppercase;
  margin-top: 7px;
  margin-bottom: 7px;
  padding-bottom: 3px;
  padding: auto 8px;
  width: 20%;
  font-size: 12px;
  margin-left: 20px;
  @media (max-width: 800px) {
    display: ${({ display }) => display && `${display}`};
    width: 100%;
    text-align: center;
		margin-left: 2px;
		justify-content: space-between;
  }
`;

export const DivName = styled.th`
  display: flex;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 20px;
  background: #4c1568;
  color: white;
  margin: 0;
  justify-content: space-between;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

export const ModalSignUp = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    padding: 8px 10px;
    width: 100%;
    @media(max-width:800px){
      width: 100%;
      padding: 30px 0px			
    }
`;

export const TextList = styled.h2`
  color: #FFFFFF;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  margin-top: 4px;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		margin-bottom: 20px;
	}
`

export const DivList = styled.table`
  background: #000000;
  tr:nth-child(odd) {
    background: #292431;
  }

  @media (max-width: 800px) {
    .mediaMobile {
      display: none;
			margin-bottom: 20px;
    }
  }
`;

export const ListSign = styled.div`
  background: #4c1568;
  color: white;
  padding: 10px 10px;
  margin: 10px;

  @media(max-width: 800px){
    padding: 0;
    font-size: 14px;
    margin: 20px 0;
    text-align: center;
    width: 100%;
  }
`;

export const List = styled.tr`
  margin: 0;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;


export default DivGeneral;
