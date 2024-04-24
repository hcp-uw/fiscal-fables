import type { CardProps, SizeTokens } from "tamagui";
import { Card, Label, RadioGroup, XStack } from "tamagui";

interface AnswersProps extends CardProps {
  size: SizeTokens;
  value: string;
  answer: string;
}

export default function Answer({
  size,
  answer,
  value,
  ...props
}: AnswersProps) {
  const id = `radiogroup-${value}`;
  const color = "$purple3Dark";
  return (
    <XStack
      width={300}
      alignItems="center"
      gap="$5"
      borderWidth={1}
      borderRadius={4}
      borderColor={color}
      px={20}
    >
      <RadioGroup.Item value={value} id={id} size={size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <Label color={color} size={size} htmlFor={id} width="90%">
        {answer}
      </Label>
    </XStack>
  );
}
