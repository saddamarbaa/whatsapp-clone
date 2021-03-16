/** @format */

import styled from "styled-components";
import React from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<AppWrapper>
			<AppBody>
				<Sidebar />
			</AppBody>
		</AppWrapper>
	);
};

export default App;

const AppWrapper = styled.div`
	background-color: lightblue;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const AppBody = styled.div`
	display: flex;
	background-color: #ededed;
	height: 90vh;
	width: 90vw;
	margin-top: -50px;
	box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.2);
`;
