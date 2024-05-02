import { GridBackground } from "@lobehub/ui";

export default function GridBackgroundComponent() {
  return (
    <GridBackground
      style={{ width: "100%" }}
      animation
      showBackground
      backgroundColor="#001dff"
      colorBack="#ffffff33"
      random
      strokeWidth={2}
      animationDuration={6}
      colorFront="#ffffff"
    />
  );
}
