import React from 'react'
import * as S from './style'
import SignIn from '../../../components/SignIn'

const Body = () => {

	return (
		<>
			<S.Container>
				<S.ContainerLeft>
					<S.DivImage>
						{/* <S.Title Fsize={30} color="white">Convenção Radicais Livres</S.Title> */}
						<S.LogoEvent src="../assets/conf_texto.png" />
						{/* <S.Text>
							<p>Ribeirão Pires</p>
							<p>Rio Grande da Serra</p>
							<p>Alto Tietê</p>
						</S.Text> */}
					</S.DivImage>
				</S.ContainerLeft>
				<S.ContainerRight>
					<SignIn />
				</S.ContainerRight>
			</S.Container>
		</>
	)
}

export default Body