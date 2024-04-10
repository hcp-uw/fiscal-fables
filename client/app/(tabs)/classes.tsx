import { ScrollView, Text, View, XStack } from "tamagui";
import { UnitCard } from "../components/card";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <XStack flexDirection="column" margin="$6" gap="$10">
        <UnitCard
          unit={1}
          animation="bouncy"
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        />
        <UnitCard
          unit={1}
          animation="bouncy"
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        />
      </XStack>
    </ScrollView>
  );
}
