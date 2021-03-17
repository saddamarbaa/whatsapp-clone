/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
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
				<ChatMessage>
					<ChatName>Saddam</ChatName> hi my friend
					<ChatTimeStamp> 07:00pm</ChatTimeStamp>
				</ChatMessage>
				<ChatReciver>
					<ChatName>Saddam</ChatName> hi my
					<ChatTimeStamp> 07:00pm</ChatTimeStamp>
				</ChatReciver>
			</ChatBody>
			<ChatFooter>
				<InsertEmoticon />
				ok
				<form>
					<input
						type='text'
						value={input}
						placeholder='Type Your messsgr'
					/>
				</form>
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
	}

	p {
		color: gray;
	}
`;

const ChatHeaderRight = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 100px;
	background: pink;
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
	input {
		flex: 1;
		padding: 10px;
	}
`;

const ChatMessage = styled.p`
	background: cadetblue;
	font-size: 16px;
	padding: 10px;
	font-weight: bold;
	border-radius: 10px;
	width: fit-content;
	margin-bottom: 30px;
	position: relative;
	color: white;
`;

const ChatReciver = styled(ChatMessage)`
	background: pink;
	margin-left: auto;
`;

const ChatName = styled.span`
	position: absolute;
	top: -18px;
	color: black;
	font-weight: 800;
	font-size: x-small;
`;

const ChatTimeStamp = styled.span`
	margin-left: 10px;
	font-size: xx-small;
`;
