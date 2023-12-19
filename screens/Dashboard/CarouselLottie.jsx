import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const CarouselLottie = ({ userData }) => {
  const data = [
    {
      id: 0,
      lottieSource: require("../../assets/animations/lottie1.json"),
      isLooping: true,
      text: "Tapping this lottie launches a in-app webview with user details",
    },
    {
      id: 1,
      lottieSource: require("../../assets/animations/lottie2.json"),
      isLooping: true,
      text: "Tapping this plays 33% of the frames at a time of this lottie.",
    },
    {
      id: 2,
      lottieSource: require("../../assets/animations/lottie3.json"),
      isLooping: true,
      text: "Tapping this lottie opens the bottom sheet.",
    },
  ];
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [handleBottomSheet, setHandleBottomSheet] = useState(false);
  const navigation = useNavigation();

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
  const handleOpenBottomSheet = () => {
    setHandleBottomSheet(!handleBottomSheet);
  };

  const handleBackToHome = () => {
    navigation.navigate("Home");
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

        {/* Pagination Dots */}
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
      {data[activeSlide].id === 0 || data[activeSlide].id === 2 ? (
        <View style={styles.bottomSheetContainer}>
          <TouchableOpacity
            style={styles.bottomRound}
            onPress={handleOpenBottomSheet}
          >
            <Text style={styles.upArrow}>{handleBottomSheet ? "↓" : "↑"}</Text>
            <Text style={styles.upArrowText}>
              {handleBottomSheet ? "Close" : "Bottom Sheet"}
            </Text>

            {/* Content Inside Bottom Sheet */}
            {data[activeSlide].id === 0 ? (
              <View style={styles.mainTextContainer}>
                <Text style={styles.mainText}>
                  This is{" "}
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    bottom sheet
                  </Text>
                  ,
                </Text>
                <Text style={styles.mainText}>launched by tapping the</Text>
                <Text style={styles.mainText}>lottie or swiping up</Text>
                <Text style={styles.mainText}></Text>
                <Text style={styles.mainText}></Text>
                <Text style={styles.mainText}></Text>
                <Text style={styles.mainText}></Text>
              </View>
            ) : data[activeSlide].id === 2 ? (
              <View style={styles.mainTextContainer}>
                <Text style={styles.mainText}>
                  This is a webview, launched by
                </Text>
                <Text style={styles.mainText}>
                  <Text style={{ color: "#FFCD00", fontWeight: "bold" }}>
                    {userData.firstName}.
                  </Text>
                  They are{" "}
                  <Text style={{ color: "#D800FF", fontWeight: "bold" }}>
                    {userData.age}yrs
                  </Text>{" "}
                  old.{" "}
                </Text>
                <Text style={{ color: "white" }}></Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleBackToHome}
                >
                  <Text style={styles.buttonText}>Back to Home</Text>
                </TouchableOpacity>
                <Text style={{ color: "white" }}></Text>
                <Text style={{ color: "white" }}></Text>
              </View>
            ) : null}
          </TouchableOpacity>

          {/* Conditional styling for the bottom circle */}
          {handleBottomSheet ? (
            <View
              style={[
                styles.bottomRound,
                handleBottomSheet ? styles.slideUp : null,
              ]}
            ></View>
          ) : null}
        </View>
      ) : null}
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
  bottomRound: {
    width: 1200,
    height: 1200,
    borderRadius: 600,
    backgroundColor: "#2a2a2a",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1250,
  },
  upArrow: {
    marginBottom: 0,
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  upArrowText: {
    marginBottom: 100,
    color: "white",
  },
  mainTextContainer: { marginBottom: 930, marginTop: 0 },
  mainText: {
    color: "white",
    fontSize: 15,
    letterSpacing: 1,
    marginBottom: 5,
  },
  bottomSheetContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideUp: {
    marginTop: 0,
    backgroundColor: "black",
  },
  button: {
    // backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CarouselLottie;
