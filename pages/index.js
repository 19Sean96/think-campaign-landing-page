import Head from 'next/head'

import Header from '../components/Sections/Header'
import Landing from '../components/Sections/Landing'
import Details from '../components/Sections/Details'
import Testimonials from '../components/Sections/Testimonials'
import Form from '../components/Sections/Form'
import Footer from '../components/Sections/Footer'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/tdy1pkk.css" />
      </Head>
      <Header />
      <Landing />
      <Details />
      <Testimonials />
      <Form />
    </div>
  )
}
