import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import Page from "./Page";

const Container = styled.View`
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.View`
  margin: 0px 4px;
  background-color: ${(props) => (props.focused ? "#262626" : "#dfdfdf")};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

const ItemTitleWrapper = styled.View`
  padding-bottom: 10px;
  align-items: center;
`;
const ItemTitle = styled.Text`
  padding: 7px 10px;
  text-align: center;
`;

const Carousel = ({ pages, pageWidth, gap, offset }) => {
  const [page, setPage] = useState(0);
  const onScroll = (e) => {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / (pageWidth + gap));
    setPage(newPage);
  };

  function renderItem(item,index) {
    console.log(item, index);
    return (
      <View>
        <ItemTitleWrapper style={index === page ? {
          opacity: 1
        } : {
          opacity: 0
        }}>
          <View style={{ borderWidth: 1, width: "80%", borderRadius: 20 }}>
            <ItemTitle>{item.color}</ItemTitle>
          </View>
        </ItemTitleWrapper>
        <Page item={item} style={{ width: pageWidth, marginHorizontal: gap / 2, flex: 1 }} />
      </View>
    );
  }

  return (
    <Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={({ item, index }) => renderItem(item, index)}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorWrapper>
        {Array.from({ length: pages.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
};

export default Carousel;
