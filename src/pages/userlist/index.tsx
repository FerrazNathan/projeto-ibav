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
  const [dataPayment, setDataPayment] = useState<any>()
  const [validator, setValidator] = useState<any>([])
  const [listValid, setListValid] = useState<any>([])

  const url = `https://conferencia-radicais-default-rtdb.firebaseio.com/inscritos.json`

  useEffect(() => {
    axios.get(url).then((res) => {
      if (res.data) {
        setData(Object.entries(res.data))
        setLoading(false)
      }
    });
  }, [])

  const uri = 'https://api.mercadopago.com/v1/payments/search?sort=date_created&criteria=desc&description=Convenção Radicais Livres'
  const encoded = encodeURI(uri)

  useEffect(() => {
    axios.get(encoded, {
      headers: {
        Authorization: 'Bearer APP_USR-1739479935263753-060921-ebd0e354a27881d9c2444a96b0bdbb80-127832490'
      }
    })
      .then((response) => {
        setDataPayment(response.data.results)
      });

  }, [])

  useEffect(() => {
    const arrayEmailsAproved = dataPayment && dataPayment.map(item => {
      if (item.status === 'approved') {
        return item.payer.email.toLowerCase()
      }
      return ''
    })

    const filtrado = arrayEmailsAproved && arrayEmailsAproved.filter(item =>{
      return item !== ''
    })

    const valid = dataPayment && dataPayment.map(item => {
        return item.payer.email
    })

    setValidator(filtrado)
    setListValid(valid)
  }, [dataPayment])


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
              <TextList>Lista de inscritos ( {validator && validator.length} )</TextList>
              <DivList>
                <DivName>
                  <Describe>Nome</Describe>
                  <Describe>Telefone</Describe>
                  <Describe display="none">Cargo</Describe>
                  <Describe display="none">Pastor</Describe>
                  <Describe display="none">Igreja</Describe>
                  <Describe display="none">Cidade</Describe>
                  <Describe>Pagamento</Describe>
                </DivName>
                {listaDeInscritos.map((item: any) => {
                  
                  return (
                    <>
                    {
                      listValid && listValid.includes(item[1].email) && 
                    <List>
                      <ListDescribe>{item[1].name} {item[1].surname}</ListDescribe>
                      <ListDescribe>{item[1].tel}</ListDescribe>
                      <ListDescribe display="none">
                        {item[1].office}
                      </ListDescribe>
                      <ListDescribe display="none">
                        {item[1].sheperd}
                      </ListDescribe>
                      <ListDescribe display="none">{item[1].church}</ListDescribe>
                      <ListDescribe display="none">{item[1].city}</ListDescribe>
                      {
                        validator && validator.includes(item[1].email.toLowerCase()) ? (
                          <ListDescribe style={{ color: '#15F904', fontWeight: 'bold' }}>Pagamento Aprovado</ListDescribe>
                        ) : (
                          <ListDescribe style={{ color: '#FF69B4' }}>Aguardando Aprovação</ListDescribe>
                        )
                      }
                    </List>
                    }
                    </>
                  );
                })}
              </DivList>
            </ModalSignUp>
            {listaDeEspera.length > 0 &&
              <ModalSignUp>
                <TextList>Lista de Espera ( {listaDeEspera.length} )</TextList>
                <DivList>
                  <DivName>
                    <Describe>Nome</Describe>
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
