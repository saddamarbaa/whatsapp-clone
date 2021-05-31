/** @format */

import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../Firebase";
import firebase from "firebase";

const SidebarCaht = ({ id, name, AddNewChat }) => {
	const [seed, setSeed] = useState("");

	useEffect(() => {
		const seed = Math.floor(Math.random() * 5000);

		setSeed(seed);
	}, []);

	const createChat = () => {
		const roomName = prompt("Please Enter name or room");

		if (roomName) {
			db.collection("rooms")
				.add({
					name: roomName,
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				})
				.then((docRef) => {
					console.log("Document written with ID: ", docRef.id);
				})
				.catch((error) => {
					console.error("Error adding document: ", error);
				});
		}
	};

	return !AddNewChat ? (
		<SidebarCahtWrapper>
			<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
			<SidebarCahtInfo>
				<h2> {name}</h2>
				<p>last message </p>
			</SidebarCahtInfo>
		</SidebarCahtWrapper>
	) : (
		<SidebarNewCaht onClick={createChat}>
			<div>
				<h2>Add new chat</h2>
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
	transition: 0.5s;

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
