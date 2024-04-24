import { CardProps, RadioGroup, YStack } from "tamagui";
import Answer from "./answer";

interface AnswerListProps extends CardProps {
  header: String;
  subHeader?: String;
}

export default function AnswerList({
  header,
  subHeader,
  ...props
}: AnswerListProps) {
  return (
    <RadioGroup aria-labelledby="Choose Your Answer" name="questionForm">
      <YStack width={300} alignItems="center" gap="$5">
        <Answer size="$5" value="1" answer="First value" />
        <Answer size="$5" value="2" answer="Second value" />
        <Answer size="$5" value="3" answer="Third value" />
        <Answer size="$5" value="4" answer="Fourth value" />
      </YStack>
    </RadioGroup>
  );
}
