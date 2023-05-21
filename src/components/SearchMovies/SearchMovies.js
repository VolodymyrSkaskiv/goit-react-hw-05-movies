import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form, Input } from './SearchMovies.styled';

// додаємо функціонал для пошуку фільмів
const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault(); // відміняємо стандартну поведінку браузера

    const query = evt.target.elements.query.value.trim(); // додаємо доступ до значення поля пошуку

    // додаємо перевірку на наявність значення в полі пошуку
    if (!query) {
      toast.error('Please enter something');
      evt.target.reset();
      return;
    }

    onSubmit(query);
    evt.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Search movies" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

// додаємо перевірку на типи пропсів
SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;
