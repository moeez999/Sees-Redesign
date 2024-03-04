const QuoteContainer = ({ quoteData }) => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4 container mx-auto">
      {quoteData.map((quote, index) => (
        <div key={index} className="container-card shadow-2xl">
          <div className="content">
            <h1 className="text-xl font-semibold">{quote.reviewerName}</h1>
            <p className="text-xl">{quote.starRating}</p>
            <p className="text-base">{quote.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuoteContainer;
