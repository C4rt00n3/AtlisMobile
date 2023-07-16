import { Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  BoxConteinerCarousel,
  ImageBackground,
  StyledCard,
} from "./styles.carrousel";
import React from "react";

const sliderWidth = Math.round(Dimensions.get("window").width);

const data = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "https://i.ibb.co/M5byQns/card-1.png",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl:
      "https://th.bing.com/th/id/R.306ca31cdca0a2f3b444187b183725b6?rik=iqVy%2bMiLnl24Ag&riu=http%3a%2f%2fwww.educacao.pr.gov.br%2fsites%2fdefault%2farquivos_restritos%2ffiles%2fimagem%2f2020-03%2fwhatsapp_image_2020-03-13_at_11.50.54_1.jpeg&ehk=sDdIwMqlXSnsOWHWAs4Bo13JEo%2bMML3FvGS%2ftBRHsjw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl:
      "https://th.bing.com/th/id/OIP.4D0d0AC5rQOtspqFrjsozQHaEL?pid=ImgDet&w=1905&h=1074&rs=1",
  },
];

type Props = {
  item: {
    imgUrl: string;
    title: string;
    body: string;
  };
  index: number;
};

const Card = ({ item, index }: Props) => {
  return (
    <StyledCard key={index}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{ uri: item.imgUrl }}
      />
    </StyledCard>
  );
};

export default function MyCarrousel() {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <BoxConteinerCarousel>
      <Carousel
        layout="tinder"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data}
        renderItem={Card}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        inactiveSlideShift={0}
        useScrollView={true}
        vertical={false}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </BoxConteinerCarousel>
  );
}
