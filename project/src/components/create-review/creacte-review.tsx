import {ChangeEvent, FC, useCallback, useMemo, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getMovieLink } from '../../utils/movie';
import { postMovieReview } from '../../store/api.requests';

type Props = {
  movieId: string;
};

const AddReview: FC<Props> = (props) => {
  const { movieId } = props;
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  const onRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const isSubmitEnabled = useMemo(() => (
    reviewText && reviewText.length >= 50 && reviewText.length <= 400 && rating
  ), [reviewText, rating]);

  const handleSubmit = useCallback(() => {
    if (isSubmitEnabled) {
      postMovieReview(movieId, { comment: reviewText, rating })
        .then(() => navigate(getMovieLink(movieId)));
    }
  }, [movieId, reviewText, rating, navigate, isSubmitEnabled]);

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((el) => (
              <span key={el}>
                <input className="rating__input" id={`radio-${el + 1}`} type="radio" name="rating" value={el + 1} checked={rating === el + 1} onChange={onRatingChange}/>
                <label className="rating__label" htmlFor={`radio-${el + 1}`}>Rating {el + 1}</label>
              </span>
            ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={handleTextChange}/>
        {
          isSubmitEnabled &&
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        }
      </div>
    </form>
  );
};

export default AddReview;
