import {
  Card,
  H2,
  type CardProps,
  Paragraph,
  XStack,
  Button,
  Image,
  fullscreenStyle,
} from "tamagui";

interface UnitCardProps extends CardProps {
  unit: number;
}

export function UnitCard({ unit, ...props }: UnitCardProps) {
  return (
    <Card mx={5} p={20} elevate bordered {...props}>
      <XStack gap="$10" overflow="hidden">
        <H2>Unit {unit}</H2>
        <Button>Guide Book</Button>
      </XStack>
    </Card>
  );
}
