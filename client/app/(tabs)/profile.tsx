import type { CardProps } from 'tamagui'
import { Text, View, Card, H2, Paragraph, Image } from "tamagui";

export default function TabTwoScreen(props: CardProps) {
  return (
    <View flex={1} alignItems="center">
      <Image
        source={require("../../assets/images/image-removebg-preview.png")}
        borderRadius={10}
        style={{ width: "31%", height: 113, borderRadius: 10 }}
      />
      <Text fontSize={20} paddingBottom={15}>Username</Text>
      <Card backgroundColor={"$purple7Light"} borderRadius={20} elevate size="$9" >
        <Card.Header >
          <H2>Achievements</H2>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Paragraph>
        </Card.Header>
        <Card.Footer />
        {/* whatever */}
        <Card.Background />
      </Card>
    </View>
  );
}
