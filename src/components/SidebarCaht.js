/** @format */

import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../Firebase";
import firebase from "firebase";
import { Link } from "react-router-dom";

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
		<StyledLink to to={`/rooms/${id}`}>
			<SidebarCahtWrapper>
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
				/>
				<SidebarCahtInfo>
					<h2> {name}</h2>
					<p>last message </p>
				</SidebarCahtInfo>
			</SidebarCahtWrapper>
		</StyledLink>
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
	padding-right: 0px;
	overflow-y: hidden;
	max-height: 120px;

	h2 {
		padding-bottom: 5px;
		font-size: 1.2em;
	}
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

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
`;
