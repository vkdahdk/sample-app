import '../styles/globals.css';
import { wrapper } from '../redux/configureStore';
import AppContext from '../AppContext';

function MyApp({ Component, pageProps }) {
    return (
        <AppContext.Provider value={''}>
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default wrapper.withRedux(MyApp);
