import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import {
  CastHeader,
  CastInfo,
  CastList,
  CastListItem,
  CastName,
  NoCastText,
  Wrapper,
} from './Cast.styled';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';

const Cast = () => {
  const { movieId } = useParams(); // додаємо параметр movieId
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <Wrapper>
      <CastHeader>Cast</CastHeader> {/* додаємо заголовок */}
      {/* додаємо перевірку на наявність акторів */}
      {cast.length && (
        <CastList>
          {cast.map(actor => (
            <CastListItem className="cast-card" key={actor.id}>
              {/* додаємо перевірку на наявність фото */}

              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : `https://via.placeholder.com/200x300?text=No+Image`
                }
                alt={`${actor.name} profile`}
              />

              {/* додаємо інформацію про актора */}
              <CastInfo>
                <CastName>{actor.name}</CastName>
                <p>Character: {actor.character}</p>
              </CastInfo>
            </CastListItem>
          ))}
        </CastList>
      )}
      <NoCastText>
        {error && <h2>We don't have any information about the cast yet.</h2>}
      </NoCastText>
      {isLoading && <LoadingIndicator />}
    </Wrapper>
  );
};

export default Cast;
