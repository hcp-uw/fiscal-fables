import { CardProps, Text } from "tamagui";

interface QuestionsProps extends CardProps {
  header: String;
  subHeader?: String;
}

export default function QuestionsCard({
  header,
  subHeader,
  ...props
}: QuestionsProps) {
  return <Text>Answers</Text>;
}
