import { useRouter } from "expo-router";
import { Card, H2, type CardProps, XStack, Button, YStack, H4 } from "tamagui";

interface UnitCardProps extends CardProps {
  header: String;
  subHeader?: String;
}

export function UnitCard({ header, subHeader, ...props }: UnitCardProps) {
  const router = useRouter();

  const handleClick = () => {
    console.log("UnitCard clicked");
    router.push("/(units)/one");
  };

  return (
    <Card
      mx={5}
      p={20}
      elevate
      bordered
      {...props}
      onPress={handleClick}
      backgroundColor={"$purple8Light"}
      borderColor={"$purple8Light"}
    >
      <XStack gap="$10" overflow="hidden" alignItems="center">
        <YStack>
          <H2>{header}</H2>
          {subHeader && <H4 size={"$1"}>{subHeader}</H4>}
        </YStack>
        <Button backgroundColor={"$purple8"}>GuideBook</Button>
      </XStack>
    </Card>
  );
}
