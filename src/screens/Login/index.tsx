import { Dimensions, useColorScheme } from "react-native";
import {
  BoxButtons,
  BoxContent,
  BoxContentButton,
  Conteiner,
  StyledParagraph,
  StyledTitle,
  StyledVectors,
  TextBold2,
  TextButton,
  TextFont16,
  TextGrenn,
  TextSpan,
} from "./styles.login";
import Vector from "../../../assets/Vector@3x.svg";
import Button from "../../components/LoginButton";
import themes from "../../../styles/theme";
import Apple from "../../../assets/apple.svg";
import Facebook from "../../../assets/facebook.svg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const sliderWidth = Dimensions.get("window");

export default function Login() {
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme!] || themes.light;

  const { navigate } = useNavigation();

  return (
    <Conteiner>
      <StyledVectors>
        <Vector
          width={sliderWidth.width * 2}
          height={sliderWidth.height * 0.8}
        />
      </StyledVectors>
      <BoxContent>
        <StyledTitle>Crie sua conta e Altis!</StyledTitle>
        <StyledParagraph>Fazer login com</StyledParagraph>
        <BoxButtons>
          <Button id="apple" color={theme.colors.black50}>
            <BoxContentButton>
              <Apple />
              <TextButton>apple</TextButton>
            </BoxContentButton>
          </Button>
          <Button color={theme.colors.blue} id="facebook">
            <BoxContentButton>
              <Facebook />
              <TextButton>Facebook</TextButton>
            </BoxContentButton>
          </Button>
          <LinearGradient
            style={{
              width: "100%",
              borderRadius: 10,
            }}
            colors={["#55F52D", "#38BE56"]}
          >
            <Button>
              <TextButton>Criar uma conta</TextButton>
            </Button>
          </LinearGradient>
        </BoxButtons>
        <TextFont16>
          Tens uma conta?
          <TextGrenn> Iniciar sessão</TextGrenn>
        </TextFont16>
        <TouchableOpacity onPress={() => navigate("home")}>
          <TextBold2>Explorar sem conta</TextBold2>
        </TouchableOpacity>
        <TextSpan>
          Ao continuar, declaro que lie e aceito o Termos e condições e Política
          de Privacidade
        </TextSpan>
      </BoxContent>
    </Conteiner>
  );
}
