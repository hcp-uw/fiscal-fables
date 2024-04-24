import type { CardProps, SizeTokens } from "tamagui";
import { Label, RadioGroup, XStack } from "tamagui";

interface AnswersProps extends CardProps {
  size: SizeTokens;
  value: string;
  label: string;
}

export default function Answer({ size, label, value, ...props }: AnswersProps) {
  const id = `radiogroup-${value}`;
  return (
    <XStack width={300} alignItems="center" space="$4">
      <RadioGroup.Item value={value} id={id} size={size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}
