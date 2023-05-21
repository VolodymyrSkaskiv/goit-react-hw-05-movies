import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; // додаємо хук для роботи з параметрами URL
import { toast } from 'react-hot-toast'; // імпортуємо плагін для сповіщень
import { fetchMovieByName } from '../services/api';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';
import MovieList from 'components/MovieList/MovieList';

import {
  SectionTitle,
  StyledSection,
} from '../components/MovieList/MovieList.styled'; // імпортуємо стилі

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // додаємо запит на фільм
  useEffect(() => {
    const query = searchParams.get('query') ?? ''; // щоб не було помилки, якщо query не буде в URL
    if (!query) return;

    // додаємо сповіщення про пошук
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieByName(query);

        // додаємо сповіщення, якщо фільмів не знайдено
        if (results.length === 0) {
          toast.dismiss(); // очищаємо попереднє сповіщення
          toast.error('No movies found');
          setMovies([]); // очищаємо масив фільмів
        } else {
          setMovies(results); // записуємо масив фільмів
        }
      } catch (error) {
        setError(true);
        toast.error(error.message);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    // додаємо запит на фільм
    getMovie();
  }, [searchParams]);

  // додаємо функцію для пошуку фільму
  const handleSubmit = query => {
    setSearchParams({ query }); // записуємо query в URL
  };

  return (
    <main>
      <StyledSection>
        <SectionTitle>Movies Page</SectionTitle>
        <SearchMovies onSubmit={handleSubmit} />
        {/* додаємо компонент для пошуку фільму */}
        {movies.length > 0 && <MovieList movies={movies} />}
        {isLoading && <LoadingIndicator />}
        {error && <h2>Sorry we didn't find this page</h2>}
      </StyledSection>
    </main>
  );
};
export default MoviesPage;
