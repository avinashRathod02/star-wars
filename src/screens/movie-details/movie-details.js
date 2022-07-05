import Character from "./character";
import colors from "@/colors";
import { Header } from "@/components";
import { Loading } from "@/components";
import { routes } from "@/navigation";
import { fetchMovies, fetchSingleMovieDetails } from "@/stores/movies/service";
import { hasObjectLength } from "@/utils";
import { map, groupBy } from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default (props) => {
  const { navigation, route } = props;
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const movieData = await fetchSingleMovieDetails(route?.params?.id);
    await setMovieDetails(movieData);
    await setLoading(false);
  }, []);

  if (loading) return <Loading />;
  if (!hasObjectLength(movieDetails)) return <Fragment />;
  const {
    id,
    director,
    episodeID,
    releaseDate,
    title,
    openingCrawl,
    characterConnection: { characters },
  } = movieDetails;
  const formattedCharacters = groupBy(characters, "species.name");

  console.log({ formattedCharacters });
  return (
    <>
      <Header title={"STAR WARS MOVIES"} />
      <ScrollView>
        <View style={styles.cont}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.row}>
            <View style={{ flex: 3 }}>
              <Text style={styles.detail}>{`Director : ${director}`}</Text>
              <Text style={styles.detail}>{`Episode ID : ${episodeID}`}</Text>
              <Text
                style={styles.detail}
              >{`Release Date : ${releaseDate}`}</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.summery}>{` ${openingCrawl}`}</Text>
            </View>
          </View>
          {map(formattedCharacters, (item) => (
            <Character {...item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "600",
    fontSize: 14,
    alignSelf: "center",
    color: colors.black,
  },
  row: { flexDirection: "row" },
  detail: {
    fontSize: 12,
    color: colors.gray2,
    marginTop: 5,
  },
  summery: {
    fontSize: 10,
    color: colors.gray4,
    marginTop: 5,
  },
  cont: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignSelf: "center",
    width: "100%",
  },
});
