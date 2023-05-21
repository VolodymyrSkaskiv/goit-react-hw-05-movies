import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../services/api';
import MovieList from 'components/MovieList/MovieList';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';
import { SectionTitle } from 'components/MovieList/MovieList.styled';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <SectionTitle>Trending today</SectionTitle>

      {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
      {isLoading && <LoadingIndicator />}
      {error && <h2>Sorry we didn't find this page</h2>}
    </>
  );
};

export default HomePage;
