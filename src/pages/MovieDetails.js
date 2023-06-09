import { Suspense } from 'react'; // додаємо бібліотеку для lazy
import { useEffect, useState } from 'react'; // додаємо бібліотеку для хуків
import { useParams, Outlet, useLocation, Link } from 'react-router-dom'; // додаємо бібліотеку для роботи з адресою
import { BsArrowLeftShort } from 'react-icons/bs'; // додаємо бібліотеку для іконки
import { fetchMovieById } from '../services/api'; // додаємо запит на фільм
import MovieCard from '../components/MovieCard/MovieCard';
import { Button, Container } from './MovieDetails.styled';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';

const MovieDelails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // додаємо запит на фільм
  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        setIsLoading(true);
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>
        {/* додаємо кнопку для повернення на попередню сторінку */}
        <Link to={location?.state?.from ?? '/'}>
          <Button type="button">
            <BsArrowLeftShort
              style={{ width: '25px', height: '25px', display: 'inline-block' }}
            />
            Go back
          </Button>
        </Link>
        {selectedMovie && <MovieCard movie={selectedMovie} />}
        {isLoading && <LoadingIndicator />}
        {error && <h2>Sorry we didn't find this page</h2>}

        <Suspense fallback={<LoadingIndicator />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDelails;
