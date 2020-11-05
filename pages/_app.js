import '../styles/globals.css'

const Header = () => {
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', width: '100%', height: '100px', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
      <span style={{ color: 'white', fontSize: '30px', fontWeight: 600 }} >Header</span>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ flexDirection: 'column' }}>
      <Component {...pageProps} />
      <Header />
    </div>
  );
}

export default MyApp
