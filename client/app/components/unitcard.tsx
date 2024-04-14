import { Link } from "expo-router";
import { Card, H2, type CardProps, XStack, Button, YStack, H4 } from "tamagui";

interface UnitCardProps extends CardProps {
  header: String;
  subHeader?: String;
}

export function UnitCard({ header, subHeader, ...props }: UnitCardProps) {
  return (
    <Link href="/(units)/one">
      <Card mx={5} p={20} elevate bordered {...props}>
        <XStack gap="$10" overflow="hidden" alignItems="center">
          <YStack>
            <H2>{header}</H2>
            {subHeader && <H4 size={"$1"}>{subHeader}</H4>}
          </YStack>
          <Button>GuideBook</Button>
        </XStack>
      </Card>
    </Link>
  );
}
