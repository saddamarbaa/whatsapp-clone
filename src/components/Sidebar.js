/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarCaht from "./SidebarCaht";
import db from "../Firebase";

const Sidebar = () => {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		db.collection("rooms").onSnapshot((snapshot) => {
			// console.log(snapshot.docs.map((doc) => doc.data()));
			// const testing = snapshot.docs.map((doc) =>
			// 	console.log("id :", doc.id, "\n Date :", doc.data()),

			setRooms(
				snapshot.docs.map((doc) => {
					return {
						id: doc.id,
						data: doc.data(),
					};
				}),
			);
		});
	}, []);

	return (
		<SidebarWrapper>
			<SidebarHeader>
				<Avatar />
				<SidebarHeaderRight>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</SidebarHeaderRight>
			</SidebarHeader>
			<SidebarSearch>
				<SidebarSearchContainer>
					<SearchSharpIcon />
					<input type='text' placeholder='Search or start anew room' />
				</SidebarSearchContainer>
			</SidebarSearch>

			<SidebarCahtContainer>
				<SidebarCaht AddNewChat />
				{rooms.map((room) => {
					return (
						<SidebarCaht
							key={room.id}
							id={room.id}
							name={room.data.name}
						/>
					);
				})}
			</SidebarCahtContainer>
		</SidebarWrapper>
	);
};

export default Sidebar;

const SidebarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.35;
	min-width: 220px;
	background-color: white;

	@media (max-width: 578px) {
		display: none;
	}
`;

const SidebarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	border-right: 1px solid lightgray;
	background-color: #ededed;
`;

const SidebarHeaderRight = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 10vw;
	background-color: #ededed;

	.MuiSvgIcon-root {
		margin-right: 10px;
		font-size: 24px !important;
	}
`;

const SidebarSearch = styled.div`
	display: flex;
	align-items: center;
	background-color: #f6f6f6;
	height: 39px;
	padding: 10px;
`;

const SidebarSearchContainer = styled.div`
	background-color: white;
	display: flex;
	align-items: center;
	width: 100%;
	height: 35px;
	border-radius: 30px;

	.MuiSvgIcon-root {
		color: gray;
		padding: 0 10px;
	}

	input {
		width: 100%;
		padding: 10px 0;
		outline: none;
		border: none;
		margin-left: 7px;
	}

	input:focus {
		outline: none;
		border: none;
	}
`;

const SidebarCahtContainer = styled.div`
	flex: 1;
	overflow: scroll;
`;
