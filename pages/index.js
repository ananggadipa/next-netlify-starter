import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mari kita coba Netlify!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Selamat datang di App Saya!" />
        <p className="description">
          Get started by edit2 file nya dulu nih
        </p>
      </main>

      <Footer />
    </div>
  )
}
