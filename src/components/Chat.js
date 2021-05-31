/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import {
	AttachFile,
	InsertEmoticon,
	MoreVert,
	SearchOutlined,
} from "@material-ui/icons";

const Chat = () => {
	const [input, setInput] = useState("");

	const sendMessage = (event) => {
		event.preventDefault();
		console.log("final Value is ", input);

		setInput("");
	};

	return (
		<ChatWrapper>
			<ChatHeader>
				<Avatar />
				<ChatHeaderInfo>
					<h3>Room name</h3>
					<p>last seen at ...</p>
				</ChatHeaderInfo>
				<ChatHeaderRight>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</ChatHeaderRight>
			</ChatHeader>

			<ChatBody>
				<p className={`chat__message ${true && "chat__receiver"}`}>
					Hey Guys
					<span className='chat__name'>Saddam</span>
					<span className='chat__timestamp'>07:00pm</span>
				</p>
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

	h3 {
		margin-bottom: 3px;
		font-weight: 500;

		@media (max-width: 768px) {
			display: none;
		}
	}

	p {
		color: gray;

		@media (max-width: 360px) {
			display: none;
		}
	}
`;

const ChatHeaderRight = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 100px;
`;

const ChatBody = styled.div`
	background: url("https://fsa.zobj.net/crop.php?r=HPh6XjS0Se_VNODSUR6Fm1R9bTHZZaIQV6BsKvbihNqsgOSM3Ftm58HrQ7nlrF9R65nUhHXkiA34Cu7Y-5-p1HjQHAcMj7SGoQS1XmK8i_Su-brIg-80w-9HV-s5c4w8z4JjR8VarCwJf8G_O4NlM5gHNQF7uHvtbJqCEL3X3fXhBsF3EdkZTrdef64jzBx9PwjBSJ23C_QtWaUi")
		repeat center center;
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 30px;
	overflow: scroll;
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
