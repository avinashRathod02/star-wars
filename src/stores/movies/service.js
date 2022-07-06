import { STAR_WARS_API_URL } from '@/config';
import axios from 'axios';

export const request = async (query) => {
  try {
    return await axios({
      method: 'post',
      url: STAR_WARS_API_URL,
      data: { query },
    })
      .then(function ({ data }) {
        return data;
      })
      .catch(function (e) {
        throw e;
      });
  } catch (e) {
    console.log(e);
  }
};

export const fetchMovies = async () => {
  const query = `{
    allFilms {
      films {
        id
        title
        director
        episodeID
        releaseDate
      }
    }
  }`;
  const { data } = await request(query);
  return await data?.allFilms?.films;
};

export const fetchSingleMovieDetails = async (id) => {
  const query = `{
      film(id:"${id}") {
        id
        title
        director
        openingCrawl
        episodeID
        releaseDate
        characterConnection {
          characters {
            species {
              name
            }
            id
            name
            gender
          }
        }
    }
  }`;
  const { data } = await request(query);
  return data?.film;
};
