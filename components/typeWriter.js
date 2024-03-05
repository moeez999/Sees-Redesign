import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

const TypewriterComponent = () => {
  const appRef = useRef(null);

  useEffect(() => {
    const app = appRef.current;

    const typewriter = new Typewriter(app, {
      loop: true,
    });

    typewriter
      .typeString(
        " TRUSTED BY HOME OWNERS, ARCHITECTS, HOUSING ASSOCIATIONS, COUNCILS AND NATIONAL HOUSE BUILDERS ALIKE."
      )
      .pauseFor(2500)
      .deleteAll()
      .start();

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <div
      id="app"
      className="text-2xl; text-white md:text-4xl xxl:text-5xl xxxl:text-7xl  font-semibold text-center p-4 mt-4 md:w-[60%] xxxl:p-8 xsm:w-full"
      ref={appRef}
    ></div>
  );
};

export default TypewriterComponent;
