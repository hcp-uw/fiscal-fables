import { Image, ScrollView, YStack } from "tamagui";
import { UnitCard } from "../components/unitcard";

export default function ClassesScreen() {
  return (
    <ScrollView>
      <YStack alignItems="center" justifyContent="center" margin="$6" gap="$10">
        <YStack
          alignItems="center"
          justifyContent="center"
          gap="$5"
          width="100%"
        >
          <UnitCard
            header="Unit 1"
            animation="bouncy"
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
          />
          <Image
            source={require("../../assets/images/Elara_Pixel.png")}
            borderRadius={10}
            style={{ width: "80%", height: 400, borderRadius: 10 }}
          />
        </YStack>
        <UnitCard
          header="Unit 2"
          subHeader={"(Coming Soon)"}
          animation="bouncy"
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        />
      </YStack>
    </ScrollView>
  );
}
