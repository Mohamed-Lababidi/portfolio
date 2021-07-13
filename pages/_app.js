import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";

// import '../styles'


import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
  )
}

export default MyApp;
