import { Text, View } from "tamagui";
import Answers from "../components/quiz/answers";
import UnitHeader from "../components/quiz/unitheader";
import ProgressBar from "../components/quiz/progressbar";
import { ProgressDemo } from "../components/quiz/demo";

export default function UnitOneScreen() {
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
    <View flex={1} alignItems="center">
      <UnitHeader unit="1" />
      <ProgressBar header="Progress" />
      <ProgressDemo />
    </View>
  );
}
