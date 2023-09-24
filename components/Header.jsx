import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex-direction: row;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Hambuger = styled.TouchableOpacity`
  width: 20%;
  flex-direction: row;
`;

const Main = styled.TouchableOpacity`
  width: 60%;
  flex-direction: row;
  justify-content: center;
`;

const QRWrapper = styled.View`
  flex-direction: row;
  width: 20%;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
`;

const Header = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Hambuger onPress={() => navigation.toggleDrawer()}>
        <Octicons name="three-bars" size={24} color="black" />
      </Hambuger>
      <Main onPress={() => navigation.navigate("home")}>
        <MaterialCommunityIcons name="cards-spade-outline" size={30} color="black" />
      </Main>
      <QRWrapper>
        <TouchableOpacity>
          <MaterialCommunityIcons name="qrcode-edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
        </TouchableOpacity>
      </QRWrapper>
    </Container>
  );
};

export default Header;
