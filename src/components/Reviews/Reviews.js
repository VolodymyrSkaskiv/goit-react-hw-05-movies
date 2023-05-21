import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // доступ до параметрів поточного URL
import { fetchMovieReviews } from '../../services/api';
import {
  Author,
  NoReviewsText,
  Review,
  ReviewHeader,
  ReviewList,
  ReviewListItem,
  Wrapper,
} from './Reviews.styled'; // додаємо стилі
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';

const Reviews = () => {
  const { movieId } = useParams(); // додаємо доступ до параметрів поточного URL
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // додаємо стейт для відгуків

  // додаємо запит на відгуки
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <Wrapper>
      <ReviewHeader>Reviews</ReviewHeader>

      {/* додаємо перевірку на наявність відгуків */}
      {reviews.length > 0 ? (
        <ReviewList className="reviews-container">
          {reviews.map(review => (
            <ReviewListItem className="review-card" key={review.id}>
              <Author>Author: {review.author}</Author>
              <Review>{review.content}</Review>
            </ReviewListItem>
          ))}
        </ReviewList>
      ) : (
        <NoReviewsText>
          We don't have any reviews for this movie yet.
        </NoReviewsText>
      )}
      {isLoading && <LoadingIndicator />}
      {error && <h2>Sorry we didn't find this page</h2>}
    </Wrapper>
  );
};
export default Reviews;
