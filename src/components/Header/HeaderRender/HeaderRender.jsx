// HeaderRender.js
import { Box, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import logo from "../../../assets/images/Logotipo.png";
import { BiArrowBack } from "react-icons/bi";

const HeaderRender = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      height="2.75rem"
      bg="#004368"
    >
      <Box>
        <BiArrowBack />
      </Box>
      <Box>
        <Image src={logo}></Image>
      </Box>
      <Box>
        <Profile />
      </Box>
    </Box>
  );
};

export default HeaderRender;