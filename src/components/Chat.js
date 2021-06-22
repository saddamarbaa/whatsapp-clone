/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import { actionTypes } from "../reducer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { v4 as uuidv4 } from "uuid";

import {
	AttachFile,
	InsertEmoticon,
	MoreVert,
	SearchOutlined,
} from "@material-ui/icons";

import firebase from "firebase";
import { useParams } from "react-router-dom";
import db from "../Firebase";
import { useStateValue } from "../StateProvider";

const Chat = () => {
	const [input, setInput] = useState("");
	const [roomName, setRoomName] = useState();
	const [seed, setSeed] = useState("");
	const { roomId } = useParams();
	const [messages, setMessages] = useState([]);
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		const seed = Math.floor(Math.random() * 5000);
		setSeed(seed);
	}, roomId);

	useEffect(() => {
		let unsubscribe1;
		let unsubscribe2;

		if (roomId) {
			unsubscribe1 = db
				.collection("rooms")
				.doc(roomId)
				.onSnapshot((snapshot) => {
					setRoomName(snapshot.data().name);
				});

			unsubscribe2 = db
				.collection("rooms")
				.doc(roomId)
				.collection("messages")
				.orderBy("timestamp", "desc")
				.limit(100)
				.onSnapshot((snapshot) => {
					setMessages(
						snapshot.docs.map((doc) => {
							return doc.data();
						}),
					);
				});
		}

		return () => {
			unsubscribe1();
			unsubscribe2();
		};
	}, [roomId]);

	const signOut = () => {
		dispatch({
			type: actionTypes.REMOVE_USER,
			user: user,
		});
	};

	const sendMessage = (event) => {
		event.preventDefault();

		db.collection("rooms").doc(roomId).collection("messages").add({
			message: input,
			name: user.displayName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput("");
	};

	return (
		<ChatWrapper>
			<ChatHeader>
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
				/>
				<ChatHeaderInfo>
					<h3>{roomName}</h3>
					<p>
						last seen at{" "}
						{new Date(
							messages[messages.length - 1]?.timestamp?.toDate(),
						).toUTCString()}
					</p>
				</ChatHeaderInfo>
				<ChatHeaderRight>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>

					<IconButton>
						<ExitToAppIcon onClick={signOut} />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</ChatHeaderRight>
			</ChatHeader>

			<ChatBody>
				{messages.map((message) => {
					return (
						<p
							key={uuidv4()}
							className={`chat__message ${
								message.name === user.displayName && "chat__receiver"
							}`}>
							{message.message}
							<span className='chat__name'>{message.name}</span>
							<span className='chat__timestamp'>
								{new Date(message.timestamp?.toDate()).toUTCString()}
							</span>
						</p>
					);
				})}
			</ChatBody>
			<ChatFooter>
				<InsertEmoticon />
				<form>
					<input
						type='text'
						value={input}
						placeholder='Type Your message'
						onChange={(event) => setInput(event.target.value)}
					/>
					<button
						type='submit'
						onClick={(event) => sendMessage(event)}></button>
				</form>
				<MicIcon />
			</ChatFooter>
		</ChatWrapper>
	);
};

export default Chat;

const ChatWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const ChatHeader = styled.div`
	display: flex;
	padding: 20px;
	align-items: center;
	border-bottom: 1px solid lightgray;
`;

const ChatHeaderInfo = styled.div`
	flex: 1;
	padding-left: 20px;

	@media (max-width: 768px) {
		display: none;
	}

	h3 {
		margin-bottom: 3px;
		font-weight: 500;
	}
`;

const ChatHeaderRight = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 200px;

	@media (max-width: 768px) {
		flex: 1;
	}
`;

const ChatBody = styled.div`
	background: url("https://fsa.zobj.net/crop.php?r=HPh6XjS0Se_VNODSUR6Fm1R9bTHZZaIQV6BsKvbihNqsgOSM3Ftm58HrQ7nlrF9R65nUhHXkiA34Cu7Y-5-p1HjQHAcMj7SGoQS1XmK8i_Su-brIg-80w-9HV-s5c4w8z4JjR8VarCwJf8G_O4NlM5gHNQF7uHvtbJqCEL3X3fXhBsF3EdkZTrdef64jzBx9PwjBSJ23C_QtWaUi")
		repeat center center;
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 30px;
	overflow: scroll !important;
`;

const ChatFooter = styled.div`
	height: 62px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid lightgray;

	form {
		display: flex;
		flex: 1;
	}

	input {
		flex: 1;
		padding: 10px;
		border-radius: 30px;
		border: none;
		padding: 10px 20px !important;
	}

	input:focus {
		outline: none;
	}

	button {
		display: none;
	}

	.MuiSvgIcon-root {
		padding: 10px;
		color: gray;
	}
`;
