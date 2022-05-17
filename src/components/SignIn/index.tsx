import React, { useState } from "react";
import {
  ContainerRight,
  Title,
  Text,
  Input,
  Select,
  DivInput,
  ButtonSignUp,
  Formulary,
  ModalSign,
} from "./styled";
import NumberFormat from "react-number-format";
import axios from "axios";

const SignIn = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [church, setChurch] = useState("");
  const [sheperd, setSheperd] = useState("");
  const [city, setCity] = useState("");
  const [office, setOffice] = useState("");

  const url = "https://conferencia-radicais-default-rtdb.firebaseio.com/inscritos.json";

  const saveData = () => {
    try {
      axios.post(url, {
        name,
        tel,
        church,
        sheperd,
        city,
        office,
      }).then((response) => {
        console.log('o que chega aqui =>', response);
        window.location.href = "/userlist";
        alert("sua inscrição foi efetuada com sucesso");
      }).catch((error) => {
        alert("Preencha todos os campos para concluir a sua inscrição")
      })
    }
    catch (e) {
      throw new Error("Algo deu errado na conexão");
    }
  }

  return (
    <ContainerRight>
      <ModalSign>
        <Title Fsize={30}>
          Faça sua <strong>inscrição</strong> agora
        </Title>
        <Text>
          Valor: R$ 40,00
        </Text>
        <Formulary>
          <div className="DivControl">
            <label>Nome:</label>
            <Input type="text" onChange={(e: any) => setName(e.target.value)} />
          </div>
          <DivInput>
            <div className="DivInput">
              <label>Telefone:</label>
              <NumberFormat
                customInput={Input}
                label="Telefone"
                format="(##) # ####-####"
                mask="_"
                minLength={10}
                allowNegative={false}
                fullWidth
                variant="outlined"
                id="phone"
                onChange={(e: any) => setTel(e.target.value)}
              />
            </div>
            <div className="DivControl">
              <label>Cidade:</label>
              <Input
                type="text"
                onChange={(e: any) => setCity(e.target.value)}
              />
            </div>
          </DivInput>
          <div className="DivControl">
            <label>pastor responsavel:</label>
            <Input
              type="text"
              onChange={(e: any) => setSheperd(e.target.value)}
            />
          </div>
          <DivInput>
            <div className="DivInput">
              <label>igreja:</label>
              <Input
                require
                type="text"
                onChange={(e: any) => setChurch(e.target.value)}
              />
            </div>
            <div className="Select">
              <label>cargo:</label>
              <Select onChange={(value) => setOffice(value.target.value)}>
                <option></option>
                <option value="Pastor" >Pastor</option>
                <option value="Dicipulador">Dicipulador</option>
                <option value="Lider">Lider</option>
                <option value="Membro de celula">Membro de célula</option>
              </Select>
            </div>
          </DivInput>
        </Formulary>
        <ButtonSignUp onClick={() => { saveData() }}>
          Inscreva-se
        </ButtonSignUp>
      </ModalSign>
    </ContainerRight>
  );
};

export default SignIn;
