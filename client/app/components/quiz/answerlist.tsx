import { CardProps, RadioGroup, Text, YStack } from "tamagui";
import Answer from "./components/quiz/answer";

interface AnswerListProps extends CardProps {
  header: String;
  subHeader?: String;
}

export default function AnswerList({ header, subHeader, ...props }: AnswerListProps) {
  return (
    <RadioGroup aria-labelledby="Select one item" defaultValue="3" name="form">
      <YStack width={300} alignItems="center" space="$2">
        List size="$3" value="2" label="Second value" />
        <Answer size="$4" value="3" label="Third value" />
        <Answer size="$5" value="4" label="Fourth value" />
      </YStack>
    </RadioGroup>
  );
}
