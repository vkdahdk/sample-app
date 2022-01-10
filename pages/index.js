// import Head from 'next/head';
// import Image from 'next/image';
import useLogin from '../hooks/useLogin';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [loginData, login, logout] = useLogin();

    const handleClickLogin = () => {
        login();
    };

    const handleClickLogout = () => {
        logout();
    };

    return (
        <div className={styles.container}>
            <div style={{ display: 'flex' }} className={'text-yellow-200'}>
                <div
                    style={{
                        flex: 1,
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'pink',
                        border: '1px solid black',
                        boxSizing: 'border-box',
                    }}
                    onClick={handleClickLogin}
                >
                    login
                </div>
                <div
                    style={{
                        flex: 1,
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'pink',
                        border: '1px solid black',
                        boxSizing: 'border-box',
                    }}
                    onClick={handleClickLogout}
                >
                    logout
                </div>
            </div>
            <div>
                {loginData && loginData.userInfo ? (
                    <div>
                        <div>{loginData.loading && `loading...`}</div>
                        <div>user info 👇👇</div>
                        <div>id: {loginData.userInfo.id}</div>
                        <div>name: {loginData.userInfo.name}</div>
                        <div>phone: {loginData.userInfo.phone}</div>
                        <div>email: {loginData.userInfo.email}</div>
                    </div>
                ) : (
                    <div>please login</div>
                )}
            </div>
        </div>
    );
}
