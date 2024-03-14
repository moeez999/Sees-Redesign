// const QuoteContainer = ({ quoteData }) => {
//   return (
//     <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4 container mx-auto">
//       {quoteData.map((quote, index) => (
//         <div key={index} className="container-card shadow-2xl">
//           <div className="content">
//             <h1 className="text-xl font-semibold">{quote.reviewerName}</h1>
//             <p className="text-xl">{quote.starRating}</p>
//             <p className="text-base">{quote.quote}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuoteContainer;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 1,
  },
};
const QuoteContainer = ({ quoteData }) => {
  return (
    // <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4 container mx-auto">
    <Swiper
      effect={"fade"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[EffectFade, Autoplay]}
      autoplay={{ delay: 3000 }}
      className="mySwiper"
    >
      {quoteData.map((quote, index) => (
        <SwiperSlide key={quote.id}>
          <div className="container-card shadow-2xl h-52">
            <div className="content">
              <h1 className="text-xl font-semibold">{quote.reviewerName}</h1>
              <p className="text-xl">{quote.starRating}</p>
              <p className="text-base">{quote.quote}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    // </div>
  );
};

export default QuoteContainer;
