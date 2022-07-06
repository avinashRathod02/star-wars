import Movie from './movie';
import { Header } from '@/components';
import { Loading } from '@/components';
import { routes } from '@/navigation';
import { fetchMovies } from '@/stores/movies/service';
import { map } from 'lodash';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default (props) => {
  const { navigation } = props;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const moviesLIst = await fetchMovies();
    await setMovies(moviesLIst);
    await setLoading(false);
  }, []);

  const onPress = (id) => {
    navigation.navigate(routes.MOVIE_DETAILS, { id });
  };
  const CONTENT = loading ? (
    <View style={styles.cont}>
      <Loading />
    </View>
  ) : (
    <ScrollView>
      <View style={styles.cont}>
        {map(movies, (item) => (
          <Movie {...item} onPress={onPress} />
        ))}
      </View>
    </ScrollView>
  );
  return (
    <>
      <Header leftIconPress={navigation?.goBack} title={'STAR WARS MOVIES'} />
      {CONTENT}
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});
