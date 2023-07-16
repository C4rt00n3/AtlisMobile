import { LinearGradient } from "expo-linear-gradient";
import {
  StyledBox,
  StyledLi,
  StyledText,
  StyledTitle,
  TouchableOpacity,
} from "./styles.card_list";
import Next from "../../../assets/next.svg";

export default function CardList({
  data,
}: {
  data: {
    id: number;
    title: string;
    text: string;
  };
}) {
  return (
    <StyledLi>
      <StyledBox>
        <StyledTitle>{data.title + ""}</StyledTitle>
        <StyledText>{data.text + ""}</StyledText>
      </StyledBox>
      <LinearGradient
        style={{ borderRadius: 10 }}
        start={{ x: 1.5, y: 0 }}
        end={{ x: 0, y: 1.5 }}
        colors={[
          "rgba(255, 255, 255, 1)",
          "rgba(150, 155, 255, 1)",
          "rgba(101, 108, 238, 1)",
        ]}
      >
        <TouchableOpacity>
          <Next />
        </TouchableOpacity>
      </LinearGradient>
    </StyledLi>
  );
}
