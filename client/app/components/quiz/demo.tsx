import { useEffect, useState } from "react";

import type { SizeTokens } from "tamagui";

import { Button, Paragraph, Progress, Slider, XStack, YStack } from "tamagui";
export function ProgressDemo() {
  const [size, setSize] = useState(4);

  const [progress, setProgress] = useState(20);

  const sizeProp = `$${size}` as SizeTokens;
  useEffect(() => {
    const timer = setTimeout(() => setProgress(60), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <YStack height={60} alignItems="center" space>
        <Paragraph height={30} opacity={0.5}>
          Size: {size}
        </Paragraph>

        <Progress size={} value={progress}>
          <Progress.Indicator animation="bouncy" />
        </Progress>
      </YStack>
    </>
  );
}
