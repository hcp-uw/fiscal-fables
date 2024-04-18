import { CardProps, Text } from "tamagui";

interface AnswersProps extends CardProps {
  header: String;
  subHeader?: String;
}

export default function Answers({ header, subHeader, ...props }: AnswersProps) {
  return <Text>Answers</Text>;
}
