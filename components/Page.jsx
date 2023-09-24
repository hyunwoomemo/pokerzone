import React from 'react';
import styled from 'styled-components/native';
import {ViewStyle} from 'react-native';


const PageItem = styled.View`
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const PageNum = styled.Text``;

export default function Page({item, style}) {
  return (
    <PageItem color={item.color} style={style}>
      <PageNum>{item.num}</PageNum>
    </PageItem>
  );
}