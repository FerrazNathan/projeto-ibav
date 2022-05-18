import React, { useState, useEffect } from "react";
import * as S from './styled'
import {Input} from "./styled";
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
				status: Count.length > 300 ? 'lista-espera' : 'ok'
			})
			.then((response) => {
				window.location.href = "/userlist";
				alert("sua inscrição foi efetuada com sucesso");
			})
			.catch((error) => {
				alert("Preencha todos os campos para concluir a sua inscrição")
			})
		}
		catch (e) {
			throw new Error("Algo deu errado na conexão");
		}
	}

	useEffect(() => {
    axios.get(url)
		.then((res) => {
      if (res.data) {
        setData(Object.entries(res.data));
        setLoading(false);
      }
    });
  }, []);

	const Count = data.map((item: { name: any }[]) => item[1].name);

	return (
		<S.ContainerRight>
			<S.ModalSign>
				<S.Title Fsize={30}>
					Faça sua <strong>inscrição</strong> agora
				</S.Title>
				<S.Text>
					Valor: R$ 40,00
				</S.Text>
				<S.Formulary>
					<div className="DivControl">
						<label>Nome:</label>
						<S.Input type="text" onChange={(e: any) => setName(e.target.value)} />
					</div>
					<S.DivInput>
						<div className="DivInput">
							<label>Telefone:</label>
							<NumberFormat
								customInput={Input}
								label="Telefone"
								format="(##) #####-####"
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
							<S.Input
								type="text"
								onChange={(e: any) => setCity(e.target.value)}
							/>
						</div>
					</S.DivInput>
					<div className="DivControl">
						<label>pastor responsavel:</label>
						<S.Input
							type="text"
							onChange={(e: any) => setSheperd(e.target.value)}
						/>
					</div>
					<S.DivInput>
						<div className="DivInput">
							<label>igreja:</label>
							<S.Input
								required='true'
								type="text"
								onChange={(e: any) => setChurch(e.target.value)}
							/>
						</div>
						<div className="Select">
							<label>cargo:</label>
							<S.Select  onChange={(e: any) => setOffice(e.target.value)}>
								<option></option>
								<option value="Pastor">Pastor</option>
								<option value="Dicipulador">Dicipulador</option>
								<option value="Lider">Lider</option>
								<option value="Membro de celula">Membro de célula</option>
							</S.Select>
						</div>
					</S.DivInput>
				</S.Formulary>
				<S.ButtonSignUp
					onClick={() =>
						name && tel && church && sheperd && office && city
							? saveData()
							: alert("preencha todos os campos")
					}
				>
					Inscreva-se
				</S.ButtonSignUp>
			</S.ModalSign>
		</S.ContainerRight>
	);
};

export default SignIn;


// onClick={() => { saveData() }}