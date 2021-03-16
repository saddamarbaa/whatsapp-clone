/** @format */

import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import styled from "styled-components";

const SidebarCaht = ({ AddNewChat }) => {
	const [seed, setseed] = useState("");

	useEffect(() => {
		const seed = Math.floor(Math.random() * 5000);

		setseed(seed);
	}, []);

	const createChat = () => {
		const roomName = prompt("Please Enter name or room");
		console.log(roomName);
	};

	return !AddNewChat ? (
		<SidebarCahtWrapper>
			<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
			<SidebarCahtInfo>
				<h2>Room name</h2>
				<p>last message </p>
			</SidebarCahtInfo>
		</SidebarCahtWrapper>
	) : (
		<SidebarNewCaht onClick={createChat}>
			<div>
				<h2>ADD NEW CHAT</h2>
			</div>
		</SidebarNewCaht>
	);
};

export default SidebarCaht;

const SidebarCahtWrapper = styled.div`
	display: flex;
	padding: 20px;
	border: 1px solid #f6f6f6;
	cursor: pointer;

	.MuiSvgIcon-root {
		color: gray;
		margin: 0 10px;
	}

	:hover {
		background-color: #ebebeb;
	}
`;

const SidebarCahtInfo = styled.div`
	padding: 15px;
`;

const SidebarNewCaht = styled.div`
	display: flex;
	padding: 20px;
	border: 1px solid #f6f6f6;
	cursor: pointer;
	:hover {
		background-color: #ebebeb;
	}
`;
