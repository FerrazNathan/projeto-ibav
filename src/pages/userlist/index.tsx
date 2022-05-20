import React, { useState, useEffect } from "react";
import axios from "axios";
import DivGeneral, {
  ModalSignUp,
  DivName,
  List,
  DivList,
  ListSign,
  Loading,
  Describe,
  ListDescribe,
  TextList
} from "./userlist.styled";
import Header from "../Home/header";

const UserList = (Data) => {
  const [loading, setLoading] = useState<any>(true);
  const [data, setData] = useState<any>([]);

  const url = `https://conferencia-radicais-default-rtdb.firebaseio.com/inscritos.json`;

  useEffect(() => {
    axios.get(url).then((res) => {
      if (res.data) {
        setData(Object.entries(res.data));
        setLoading(false);
      }
    });
  }, []);

  data.sort(function (a, b) {
    if (a[1].name < b[1].name) {
      return -1;
    } else {
      return true;
    }
  });

  const Count = data.map((item: { name: any }[]) => item[1].name);
  
  const listaDeInscritos = data.filter((item: any) => {
    return item[1].status === 'ok'
  })

  const listaDeEspera = data.filter((item: any) => {
    return item[1].status === 'lista-espera'
  })

  return (
    <>
      <Header about={true} />
      <DivGeneral>
        {loading ? (
          <Loading>
            <img src="../assets/loading-gif.gif" />
          </Loading>
        ) : (
          <>
            <ModalSignUp>
              <TextList>Lista de inscritos ( {listaDeInscritos.length} )</TextList>
              <DivList>
                <DivName>
                  <Describe marginLeft="25px">Nome</Describe>
                  <Describe>Telefone</Describe>
                  <Describe display="none">Cargo</Describe>
                  <Describe display="none">Pastor</Describe>
                  <Describe>Igreja</Describe>
                  <Describe display="none">Cidade</Describe>
                </DivName>
                {listaDeInscritos.map((item: any) => {
                  return (
                    <List>
                      <ListDescribe>{item[1].name}</ListDescribe>
                      <ListDescribe>{item[1].tel}</ListDescribe>
                      <ListDescribe display="none">
                        {item[1].office}
                      </ListDescribe>
                      <ListDescribe display="none">
                        {item[1].sheperd}
                      </ListDescribe>
                      <ListDescribe>{item[1].church}</ListDescribe>
                      <ListDescribe display="none">{item[1].city}</ListDescribe>
                    </List>
                  );
                })}

              </DivList>
            </ModalSignUp>
            {listaDeEspera.length > 0 &&
              <ModalSignUp>
                <TextList>Lista de Espera ( {listaDeEspera.length} )</TextList>
                <DivList>
                  <DivName>
                    <Describe marginLeft="45px">Nome</Describe>
                    <Describe>Telefone</Describe>
                    <Describe display="none">Cargo</Describe>
                    <Describe display="none">Pastor</Describe>
                    <Describe>Igreja</Describe>
                    <Describe display="none">Cidade</Describe>
                  </DivName>
                  {listaDeEspera?.map((item: any) => {
                    return (
                      <List>
                        <ListDescribe>{item[1].name}</ListDescribe>
                        <ListDescribe>{item[1].tel}</ListDescribe>
                        <ListDescribe display="none">
                          {item[1].office}
                        </ListDescribe>
                        <ListDescribe display="none">
                          {item[1].sheperd}
                        </ListDescribe>
                        <ListDescribe>{item[1].church}</ListDescribe>
                        <ListDescribe display="none">{item[1].city}</ListDescribe>
                      </List>
                    );
                  })}

                </DivList>
              </ModalSignUp>
            }
          </>
        )}
      </DivGeneral>
    </>
  );
};

export default UserList;
