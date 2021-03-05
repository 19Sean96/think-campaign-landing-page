import Head from 'next/head'

import Header from '../components/Sections/Header'
import Landing from '../components/Sections/Landing'
import Details from '../components/Sections/Details'
import Testimonials from '../components/Sections/Testimonials'
import Form from '../components/Sections/Form'
import Footer from '../components/Sections/Footer'
export default function Home() {

  const sendConfirmationEmail = async (data) => {
    const res = await fetch('/api/sendConfirmation', {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
  }
  return (
    <div className="container">
      <Head>
        <meta charset="UTF-8" />
        <title>Start A Campaign, Make Some Money. 0 Risk.</title>
        <meta name="description" content="Earn money & boost your brand or help a cause!" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Campaigns" />
        <meta property="og:description" content="Earn money & boost your brand or help a cause!" />
        {/* <meta property="og:url" content="https://www.thinkpro.net/campaigns/"> */}
        <meta property="og:image" content="https://www.thinkpro.net/wp-content/uploads/newHomepageAllServices.png" />
        <meta property="og:image:secure_url" content="https://www.thinkpro.net/wp-content/uploads/newHomepageAllServices.png" />
        <meta property="og:image:width" content="1199" />
        <meta property="og:image:height" content="572" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:domain" content="www.thinkpro.net" />
        <meta property="twitter:title" content="Campaigns" />
        <meta property="twitter:description" content="Earn money & boost your brand or help a cause!" />
        <meta property="twitter:image" content="https://www.thinkpro.net/wp-content/uploads/newHomepageAllServices.png" />
        {/* <script type="text/javascript">
          window.ga=window.ga||function(){(ga.q = ga.q || []).push(arguments)};ga.l=+new Date;
			    ga('create', "UA-2975406-1", 'auto');
			    ga('send', 'pageview');
		    </script> */}
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/tdy1pkk.css" />
      </Head>
      <Header />
      <Landing />
      <Details />
      {/* <Testimonials /> */}
      <Form sendConfirmationEmail={sendConfirmationEmail}/>
      <Footer />
    </div>
  )
}

