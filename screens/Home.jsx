import React from "react";
import { Dimensions, Text, View } from "react-native";
import Layout from "../components/Layout";
import styled from "styled-components/native";
import Carousel from "../components/Carousel";

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.View``;
const TitleText = styled.Text``;
const screenWidth = Math.round(Dimensions.get("window").width);

const PAGES = [
  {
    num: 1,
    color: "#86E3CE",
  },
  {
    num: 2,
    color: "#D0E6A5",
  },
  {
    num: 3,
    color: "#FFDD94",
  },
  {
    num: 4,
    color: "#FA897B",
  },
  {
    num: 5,
    color: "#CCABD8",
  },
];

const Home = () => {
  return (
    <Layout>
      <Container>
        <Carousel gap={16} offset={36} pages={PAGES} pageWidth={screenWidth - (16 + 36) * 2} />
      </Container>
    </Layout>
  );
};

export default Home;
