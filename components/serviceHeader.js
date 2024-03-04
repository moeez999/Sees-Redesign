export default function ServiceHeader({ data }) {
  const { backgroundImage, gradientColors, title, description } = data;

  return (
    <div className="relative isolate overflow-hidden bg-secondary px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div className="" style={{}} />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">{description}</p>
      </div>
    </div>
  );
}
