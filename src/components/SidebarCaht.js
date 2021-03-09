import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const SidebarCaht = () => {
  return (
    <SidebarCahtWrapper>
      <Avatar />
      <SidebarCahtInfo>
        <h2>Room name</h2>
        <p>last message </p>
      </SidebarCahtInfo>
    </SidebarCahtWrapper>
  );
};

export default SidebarCaht;

const SidebarCahtWrapper = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid #f6f6f6;
  cursor: pointer;

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
