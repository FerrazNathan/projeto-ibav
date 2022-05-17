import React from 'react'
import DivImage, { LogoEvent, Container, ContainerLeft, Title, ContainerRight } from './style'
import SignIn from '../../../components/SignIn'
const Body = () => {


	return (
		<>
			<Container>
				<ContainerLeft>
					<DivImage>
						<Title Fsize={30} color="white">Convenção Radicais Livres</Title>
						<LogoEvent src="../assets/conferencia3.png" />
					</DivImage>
				</ContainerLeft>
				<ContainerRight>
					<SignIn />
				</ContainerRight>
			</Container>
		</>
	)
}

export default Body