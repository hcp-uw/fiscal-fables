import { Dimensions } from "react-native";
import { Button, H3, XStack } from "tamagui";

interface UnitHeaderProps {
  unit: string;
}

export default function UnitHeader({ unit }: UnitHeaderProps) {
  const screenWidth = Dimensions.get("window").width;

  return (
    <XStack
      width={screenWidth}
      height={50}
      alignItems="center"
      justifyContent="center"
      backgroundColor="$green7Light"
      position="relative"
    >
      <Button style={{ position: "absolute", left: 20 }}>Back</Button>
      <H3>{`Unit ${unit}`}</H3>
    </XStack>
  );
}
