import Router from 'next/router';
import React, {useEffect } from 'react';
import { GTMPageView } from '../util/gtm'
import FacebookPixel from '../components/FacebookPixel'
import '../styles/styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChartBar, faCaretDown, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faChartBar, faCaretDown, faArrowRight, faArrowLeft)

function MyApp({ Component, pageProps }) {


      // Initiate GTM
      useEffect(() => {
        const handleRouteChange = (url) => GTMPageView(url);
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

  const GTM_ID = process.env.GTM_ID
  return (
    <FacebookPixel>
      <Component {...pageProps} />
    </FacebookPixel>
  )
}

export default MyApp