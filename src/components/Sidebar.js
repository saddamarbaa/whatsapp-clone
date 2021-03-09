import React from "react";
import styled from "styled-components";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <Avatar />
        <SidebarHeaderRight>
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
        </SidebarHeaderRight>
      </SidebarHeader>
      <SidebarSearch>ok</SidebarSearch>
      <SidebarChat></SidebarChat>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div``;

const SidebarHeader = styled.div``;

const SidebarHeaderRight = styled.div``;

const SidebarSearch = styled.div``;

const SidebarChat = styled.div``;
