import PropTypes from 'prop-types';
import { StyledSection, StyledLink, List, ListItem } from './MovieList.styled'; // додаємо стилі
import { useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledSection>
      <List>
        {movies.map(({ id, title, name }) => (
          <ListItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};
