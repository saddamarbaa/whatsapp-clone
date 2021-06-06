/** @format */

import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../Firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Login = () => {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => {
				// console.log(error);
			});
	};

	return (
		<LoginWrapper>
			<LoginContainer>
				<img
					src='https://freepngimg.com/thumb/whatsapp/77079-logo-whatsapp-computer-icons-free-hq-image-thumb.png'
					alt='whatsapp image'
				/>
				<LoginText>
					<h2>Sign in to WhatsApp</h2>
				</LoginText>
				<Button onClick={signIn}>Sign In With Google</Button>
			</LoginContainer>
		</LoginWrapper>
	);
};

export default Login;

const LoginWrapper = styled.div`
	display: grid;
	background: #f8f8f8;
	width: 100vw;
	height: 100vh;
	place-items: center;
`;

const LoginContainer = styled.div`
	padding: 100px;
	text-align: center;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);

	img {
		height: 100px;
		object-fit: contain;
		margin-bottom: 40px;
	}

	/* Overwrite material-ui styling */
	button {
		margin-top: 50px;
		text-transform: inherit !important;
		background-color: #0a8f48;
		border-color: #0a8f48;
		color: white;
		font-size: 17px;

		transition: 0.5;
	}

	button:hover {
		background-color: #075e54;
		border-color: #075e54;
	}
`;

const LoginText = styled.div``;
