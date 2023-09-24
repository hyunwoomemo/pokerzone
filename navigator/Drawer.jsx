import { createDrawerNavigator } from "@react-navigation/drawer";
import Tabs from "./Tab";
import { useRef, useState } from "react";
import { Animated, LayoutAnimation, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { toggleAnimation } from "../animations/toggleAnimation";

const Drawer = createDrawerNavigator();

const DrawerContainer = styled.View`
  margin-top: 30px;
  padding: 20px;
  gap: 15px;
`;

const WrapperTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ItemWrapper = styled(Animated.createAnimatedComponent(View))`
  margin-top: 5px;
  margin-left: 10px;
`;

const InfoSection = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
`;
const ProfileWrapper = styled.View`
  background-color: gray;
  justify-content: center;
  align-items: center;
`;
const InfoTextWrapper = styled.View`
  padding: 10px;
  gap: 10px;
  justify-content: center;
`;
const NickText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const MyTicketText = styled.Text`
  color: hotpink;
`;

const AccordionWrapper = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: isOpen ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setIsOpen(!isOpen);
  };

  return (
    <Animated.View style={{ overflow: "hidden" }}>
      <TouchableOpacity onPress={toggleListItem}>
        <WrapperTitle>{title}</WrapperTitle>
      </TouchableOpacity>
      {isOpen &&
        menuData.map((_, i) => (
          <AccordionItem key={i} content={_.content}>
            {_.content}
          </AccordionItem>
        ))}
    </Animated.View>
  );
};

const AccordionItem = ({ content }) => {
  const navigation = useNavigation();
  return (
    <ItemWrapper>
      <Text onPress={() => navigation.navigate(content)}>{content}</Text>
    </ItemWrapper>
  );
};

const menuData = [{ content: "ticket" }, { content: "2" }, { content: "3" }, { content: "4" }];

const DrawerContent = () => {
  return (
    <DrawerContainer>
      <InfoSection>
        <ProfileWrapper style={{ width: 70, height: 70, borderRadius: 70 / 2 }}>
          <Text>사진</Text>
        </ProfileWrapper>
        <InfoTextWrapper>
          <NickText>지안이</NickText>
          <MyTicketText>3장</MyTicketText>
        </InfoTextWrapper>
      </InfoSection>
      <AccordionWrapper title="고객센터" data={menuData}></AccordionWrapper>
      <AccordionWrapper title="운영 정책" data={menuData}></AccordionWrapper>
      {/* 추가 아이템 */}
    </DrawerContainer>
  );
};
export function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
}
