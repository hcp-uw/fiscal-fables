import { CardProps, RadioGroup, YStack } from "tamagui";
import Answer from "./answer";

interface AnswerListProps extends CardProps {
  answers: string[];
  onValueChange: (value: string) => void;
}

export default function AnswerList({
  answers,
  onValueChange,
  ...props
}: AnswerListProps) {
  return (
    <RadioGroup
      aria-labelledby="Choose Your Answer"
      name="questionForm"
      onValueChange={onValueChange}
    >
      <YStack width={300} alignItems="center" gap="$5">
        {answers.map((answer, index) => (
          <Answer
            size="$5"
            value={String(index + 1)}
            answer={answer}
            key={index}
          />
        ))}
      </YStack>
    </RadioGroup>
  );
}
