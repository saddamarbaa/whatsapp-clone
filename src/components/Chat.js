/** @format */

import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

const Chat = () => {
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

			<ChatBody> For test</ChatBody>
			<ChatFooter>footer</ChatFooter>
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
`;
