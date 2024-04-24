import { Button, Text, View, YStack } from "tamagui";
import AnswerList from "../components/quiz/answerlist";
import UnitHeader from "../components/quiz/unitheader";
import ProgressBar from "../components/quiz/progressbar";
import { ProgressDemo } from "../components/quiz/demo";

export default function UnitOneScreen() {
  const questionNum = 1;
  const questionText = "What is the biggest bank in the world?";
  // Unit header component
  // progress bar component
  // Question component
  // Question number
  // Question text
  // Question list component
  // answer A
  // answer B
  // answer C
  // answer D
  return (
    <View flex={1} alignItems="center" gap="$5">
      <UnitHeader unit="1" />
      <ProgressBar header="Progress" />
      <ProgressDemo />
      <YStack alignItems="center" justifyContent="center" gap="$2">
        <Text color="$green7">Question {questionNum}</Text>
        <Text color="$green7">{questionText}</Text>
      </YStack>
      <AnswerList header="Select the biggest bank in the world" />
      <Button>Submit</Button>;
    </View>
  );
}
