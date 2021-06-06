/** @format */

import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../Firebase";
import firebase from "firebase";
import { Link } from "react-router-dom";

const SidebarCaht = ({ id, name, AddNewChat }) => {
	const [seed, setSeed] = useState("");
	const [message, setMessage] = useState("");

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
					// console.log("Document written with ID: ", docRef.id);
				})
				.catch((error) => {
					// console.error("Error adding document: ", error);
				});
		}
	};

	useEffect(() => {
		if (id) {
			db.collection("rooms")
				.doc(id)
				.collection("messages")
				.orderBy("timestamp", "desc")
				.limit(1)
				.onSnapshot((snapshot) => {
					setMessage(
						snapshot.docs.map((doc) => {
							return doc.data();
						}),
					);
				});
		}
	}, [id]);

	return !AddNewChat ? (
		<StyledLink to={`/rooms/${id}`}>
			<SidebarCahtWrapper>
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
				/>
				<SidebarCahtInfo>
					<h2> {name}</h2>
					<p> {message[0]?.message} </p>
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

	@media (max-width: 578px) {
		display: none;
	}

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

	@media (max-width: 578px) {
		font-size: 1rem;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
`;
