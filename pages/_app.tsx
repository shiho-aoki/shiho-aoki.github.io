import type { AppProps /*, AppContext */ } from 'next/app';
import Header from '../components/header';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;