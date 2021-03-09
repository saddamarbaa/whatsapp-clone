import React from "react";
import styled from "styled-components";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { Avatar, IconButton } from "@material-ui/core";

const Sidebar = () => {
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
          <input type="text" placeholder="search or start a new room" />
        </SidebarSearchContainer>
      </SidebarSearch>
      <SidebarChat>ok</SidebarChat>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
  background-color: white;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;
`;

const SidebarHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  min-width: 10vw;

  .MuiSvgIcon-root {
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
    margin: 0 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    margin-left: 10px;
  }

  input:focus {
    outline: none;
    border: none;
  }
`;

const SidebarChat = styled.div`
  display: flex;
`;
