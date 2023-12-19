import React, { useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import LottieView from "lottie-react-native";

const CarouselLottie = () => {
  const data = [
    {
      lottieSource: require("../../assets/animations/lottie1.json"),
      isLooping: true,
      text: "Tapping this lottie launches a in-app webview with user details",
    },
    {
      lottieSource: require("../../assets/animations/lottie2.json"),
      isLooping: true,
      text: "Tapping this plays 33% of the frames at a time of this lottie.",
    },
    {
      lottieSource: require("../../assets/animations/lottie3.json"),
      isLooping: true,
      text: "Tapping this lottie opens the bottom sheet.",
    },
  ];
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderCarouselItem = ({ item, index }) => {
    return (
      <View style={styles.carouselItem}>
        <LottieView
          source={item.lottieSource}
          autoPlay={item.isLooping}
          loop={item.isLooping}
          style={styles.lottieAnimation}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Carousel Container */}
      <View style={styles.carouselContainer}>
        {/* Animation */}
        <Carousel
          ref={carouselRef}
          data={data}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={300}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        {/* Pgination Dots */}
        <View style={styles.paginationContainer}>
          <Pagination
            dotsLength={data.length}
            activeDotIndex={activeSlide}
            dotStyle={styles.dotStyle}
            inactiveDotStyle={styles.inactiveDotStyle}
            inactiveDotOpacity={0.8}
            inactiveDotScale={0.9}
          />
        </View>
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.paginationText}>{data[activeSlide].text}</Text>
      </View>

      {/* Bottom Sheet */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },
  carouselContainer: {
    alignItems: "center",
    marginTop: "15%",
    width: "100%",
  },
  carouselItem: {
    width: "100%",
    height: 320,
    justifyContent: "center",
    alignItems: "center",
  },
  lottieAnimation: {
    width: 320,
    height: 320,
  },
  paginationContainer: {
    marginTop: -35,
    width: "100%",
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "white",
  },
  inactiveDotStyle: {
    backgroundColor: "gray",
  },
  textContainer: {
    width: "100%",
    textAlign: "center",

    paddingLeft: 15,
    paddingRight: 15,
  },
  paginationText: {
    color: "white",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 20,
    lineHeight: 28,
  },
});

export default CarouselLottie;
