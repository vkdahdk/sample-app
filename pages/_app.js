import { wrapper } from '/redux/configureStore';
import AppContext from '/AppContext';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <AppContext.Provider value={''}>
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default wrapper.withRedux(MyApp);
