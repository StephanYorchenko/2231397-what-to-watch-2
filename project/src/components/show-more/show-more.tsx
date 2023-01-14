type Props = {
  loadAdditionalItems: VoidFunction;
}

const ShowMore = (props: Props) => {
  const { loadAdditionalItems } = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={loadAdditionalItems}
      >
        Show more
      </button>
    </div>
  );
};


export default ShowMore;
