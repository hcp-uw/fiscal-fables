import { Button, Text, View, YStack } from "tamagui";
import AnswerList from "../components/quiz/answerlist";
import UnitHeader from "../components/quiz/unitheader";
import ProgressBar from "../components/quiz/progressbar";
import { ProgressDemo } from "../components/quiz/demo";

export default function UnitOneScreen() {
  // getCoursebyID()
  // receives Questions[], answer options?, course image
  /**
   * Question {
   *  questionText: string;
   *  coinValue: number;
   *  correctIndex: number;
   *  answers: string[];
   * }
   */
  const questionNum = 1;

  const questionText = "What is the biggest bank in the world?";
  const coinValue = -1;
  const correctIndex = 1;
  const answers: string[] = [
    "Bank of America",
    "Bank of China",
    "Bank of England",
  ];
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

  const handlePress = () => {
    console.log("Submit button pressed");

    // check if the answer is correct
    if (correctIndex === 1) {
      console.log("Correct answer");
    } else {
      console.log("Incorrect answer");
    }

    // if correct, add coinValue to the user's total
    // if incorrect, do nothing
    // move to the next question
    // if last question, move to the next screen
    // if not last question, move to the next question
  };

  const handleValueChange = (value: string) => {
    console.log(value);
  };

  return (
    <View flex={1} alignItems="center" gap="$5">
      <UnitHeader unit="1" />
      <ProgressBar header="Progress" />
      <ProgressDemo />
      <YStack alignItems="center" justifyContent="center" gap="$2">
        <Text color="$green7">Question {questionNum}</Text>
        <Text color="$green7">{questionText}</Text>
      </YStack>
      <AnswerList onValueChange={handleValueChange} answers={answers} />
      <Button onPress={handlePress}>Submit</Button>
    </View>
  );
}
