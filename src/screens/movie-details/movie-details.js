import Character from './character';
import colors from '@/colors';
import { Header } from '@/components';
import { Loading } from '@/components';
import { fetchSingleMovieDetails } from '@/stores/movies/service';
import { hasObjectLength } from '@/utils';
import { map, groupBy } from 'lodash';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default (props) => {
  const { navigation, route } = props;
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const movieData = await fetchSingleMovieDetails(route?.params?.id);
    await setMovieDetails(movieData);
    await setLoading(false);
  }, []);

  const {
    id,
    director,
    episodeID,
    releaseDate,
    title,
    openingCrawl,
    characterConnection,
  } = movieDetails;
  const characters = characterConnection?.characters ?? [];
  const formattedCharacters = groupBy(characters, 'species.name');

  const DETAILS_VIEW = (
    <View style={styles.row}>
      <View style={{ flex: 3 }}>
        <Text style={styles.detail}>{`Director : ${director}`}</Text>
        <Text style={styles.detail}>{`Episode ID : ${episodeID}`}</Text>
        <Text style={styles.detail}>{`Release Date : ${releaseDate}`}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.summery}>{` ${openingCrawl}`}</Text>
      </View>
    </View>
  );

  const CHARACTERS = (
    <>
      <Text>Characters</Text>
      <View style={styles.itemsCont}>
        {map(formattedCharacters, (items) => (
          <Character items={items} />
        ))}
      </View>
    </>
  );

  const CONTENT =
    loading || !hasObjectLength(movieDetails) ? (
      <View style={styles.cont}>
        <Loading />
      </View>
    ) : (
      <ScrollView>
        <View style={styles.cont}>
          <Text style={styles.title}>{title}</Text>
          {DETAILS_VIEW}
          {CHARACTERS}
        </View>
      </ScrollView>
    );
  return (
    <>
      <Header leftIconPress={navigation?.goBack} title={'MOVIE DETAILS'} />
      {CONTENT}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'center',
    color: colors.black,
  },
  row: { flexDirection: 'row' },
  itemsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    width: '100%',
    justifyContent: 'space-between',
  },
  detail: {
    fontSize: 12,
    color: colors.gray2,
    marginTop: 5,
  },
  summery: {
    fontSize: 10,
    color: colors.gray3,
    marginTop: 5,
  },
  cont: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignSelf: 'center',
    width: '100%',
  },
});
