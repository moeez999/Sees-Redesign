import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const clients = [
  { id: 1, name: "Barratt", imageSrc: "Clients/Barratt.png" },
  { id: 2, name: "Berkeley Group", imageSrc: "Clients/Berkeley Group.png" },
  { id: 3, name: "BNP Paribas", imageSrc: "Clients/BNP Paribas.png" },
  { id: 4, name: "Cala Homes", imageSrc: "Clients/Cala Homes.png" },
  {
    id: 5,
    name: "Countryside Properties",
    imageSrc: "Clients/Countryside Properties.png",
  },
  { id: 6, name: "Crest Nicholson", imageSrc: "Clients/Crest Nicholson.png" },
  { id: 7, name: "Drew Smith", imageSrc: "Clients/Drew Smith.png" },
  { id: 8, name: "Lovell", imageSrc: "Clients/Lovell.png" },
  { id: 9, name: "MWP", imageSrc: "Clients/MWP.png" },
  { id: 10, name: "Persimmon Homes", imageSrc: "Clients/Persimmon Homes.png" },
];
const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 2,
  },
  640: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 5,
  },
};
const ClientSlider = () => {
  return (
    <Swiper
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      speed={3500}
      spaceBetween={50}
      breakpoints={breakpoints}
      // slidesPerView={5}
    >
      {clients.map((client) => (
        <SwiperSlide key={client.id}>
          <img src={client.imageSrc} alt={client.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientSlider;
