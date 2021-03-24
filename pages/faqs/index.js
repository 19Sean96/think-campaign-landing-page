import Head from "next/head";

import Header from "../../components/Sections/Header";
// import Landing from '../components/Sections/Landing'
// import Details from '../components/Sections/Details'
// import Testimonials from '../components/Sections/Testimonials'
import Faqs from "../../components/Sections/Faqs";
import Footer from "../../components/Sections/Footer";

import { useState, useEffect } from "react";

const faqs = (props) => {
  useEffect(() => {
    // THIS NEEDS TO BE PUSHING DATALAYERS 
    console.log("THIS IS PAGE SPEC (FAQ)")

    if (window.ga) {
      if (location.hostname !== "localhost") {
        // window.ga("send", "pageview", location.href);
        window.dataLayer.push({
          event: 'pageview',
          location: location.href
        })
      }
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <meta charset="UTF-8" />
        <title>Start A Campaign - Frequently Asked Questions.</title>
        <meta
          name="description"
          content="Think Graphics: How Our Campaigns Work"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Campaigns" />
        <meta
          property="og:description"
          content="Think Graphics: How Our Campaigns Work"
        />
        <meta property="og:url" content="https://campaigns.thinkpro.net/faqs" />
        <meta
          property="og:image"
          content="https://www.thinkpro.net/wp-content/uploads/newHomepageAllServices.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.thinkpro.net/wp-content/uploads/newHomepageAllServices.png"
        />
        <meta property="og:image:width" content="1199" />
        <meta property="og:image:height" content="572" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:domain" content="www.thinkpro.net" />
        <meta property="twitter:title" content="Campaigns" />
        <meta
          property="twitter:description"
          content="Think Graphics: How Our Campaigns Work"
        />
        <meta
          property="twitter:image"
          content="https://www.thinkpro.net/wp-content/uploads/newHomepageAllServices.png"
        />
        <script
          type="text/javascript"
          async=""
          src="https://www.google-analytics.com/analytics.js"
        ></script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/tdy1pkk.css" />
      </Head>
      <Header />

      <Faqs />

      <Footer />
    </div>
  );
};

export default faqs;
