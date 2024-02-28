// pages/map.js

import Head from "next/head";

function Map() {
  return (
    <div>
      <Head>
        <meta name="description" content="Embedded Google Map" />
      </Head>
      <div style={{ width: "100%", height: "auto" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10036.384636291157!2d-1.5239071!3d51.0328447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2dd298ea8eb29bf6!2sSEES%20Ltd!5e0!3m2!1sen!2suk!4v1654081410703!5m2!1sen!2suk"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
