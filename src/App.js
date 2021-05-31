/** @format */

import styled from "styled-components";
import React from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const App = () => {
	return (
		<AppWrapper>
			<AppBody>
				<Sidebar />
				<Chat />
			</AppBody>
		</AppWrapper>
	);
};

export default App;

const AppWrapper = styled.div`
	background-color: lightblue;
	min-height: 100vh;
	display: grid;
	/* place-items: center; */
	justify-content: center;

	background: #dadbd3;
`;

const AppBody = styled.div`
	display: flex;
	background-color: #ededed;
	min-height: 90vh;
	width: 90vw;
	/* margin-top: -50px; */
	box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.2);
	margin-bottom: 50px;
`;
