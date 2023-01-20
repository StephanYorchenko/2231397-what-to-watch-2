type Props = {
  rating: string;
}

export const Rating = (props: Props) => {
  const { rating } = props;

  return (
    <div className="review__rating">
      {String(rating).includes('.') ? String(rating) : `${rating}.0`}
    </div>
  );
};
