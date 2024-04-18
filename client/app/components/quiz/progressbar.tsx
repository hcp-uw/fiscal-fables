import { useEffect, useState } from "react";
import { CardProps, SizeTokens, Slider, Text } from "tamagui";

interface ProgressBarProps extends CardProps {
  header: String;
  subHeader?: String;
}

export default function ProgressBar({
  header,
  subHeader,
  ...props
}: ProgressBarProps) {
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
    <Slider
      size="$2"
      width={130}
      defaultValue={[4]}
      min={2}
      max={6}
      step={1}
      onValueChange={([val]) => {
        setSize(val);
      }}
    ></Slider>
  );
}
