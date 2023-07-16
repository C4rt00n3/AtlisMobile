import {
  BoxContent,
  BoxContentSpace,
  BoxIcons,
  BoxImageUser,
  BoxList,
  BoxSvgSuport,
  Conteiner,
  ImageBackground,
  Space,
  TextSpan,
} from "./styles.home";
import SvgSuport from "../../../assets/call-center 1.svg";
import InputHome from "../../components/InputHome";
import MyCarousel from "../../components/Carousel";
import { Dimensions, FlatList } from "react-native";
import CardList from "../../components/CardList";
import Navbar from "../../components/Navbar";

const sliderHeight = Dimensions.get("window").height;

const data = [
  { id: 1, title: "Vacinas", text: "Covid, Febre Amarela, H1N1, etc..." },
  { id: 2, title: "Exames", text: "Ambulatórios, Covid, Infantil e mais ...." },
];

function Home() {
  return (
    <Conteiner>
      <BoxContentSpace height={sliderHeight}>
        <BoxContent>
          <BoxIcons>
            <BoxImageUser>
              <ImageBackground source={require("../../../assets/user.png")} />
            </BoxImageUser>
            <BoxSvgSuport>
              <SvgSuport />
              <TextSpan>Ajuda</TextSpan>
            </BoxSvgSuport>
          </BoxIcons>
          <InputHome />
          <MyCarousel />
          <BoxList>
            <FlatList
              data={data}
              renderItem={({ item }) => <CardList data={item} />}
              keyExtractor={(item, i) => {
                return i.toString();
              }}
              ItemSeparatorComponent={Space}
            />
          </BoxList>
        </BoxContent>
        <Navbar />
      </BoxContentSpace>
    </Conteiner>
  );
}

export default Home;
