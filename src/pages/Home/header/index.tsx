import React from "react";
import Container, { LogoIbav, BtnLink, DivBtn, BtnSign } from "./style";

interface Props {
  about?: boolean;
}

const Header = ({ about }: Props) => { 

  return (
    <Container>
      <LogoIbav src='../assets/logoRede.png' onClick={() => (window.location.href = "/")}/>
      <DivBtn>
        <BtnLink onClick={() => (window.location.href = "/about")}>
          Sobre a convenção Radicais Livres
        </BtnLink>
        <BtnLink onClick={() => (window.location.href = "/userlist")}>
          Lista de inscritos
        </BtnLink>
        {about == true && (
          <BtnSign onClick={() => (window.location.href = "/")}>
            Inscreva-se
          </BtnSign>
        )}
      </DivBtn>
    </Container>
  );
};

export default Header;
