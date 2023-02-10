import './scss/globals.scss';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@components';
import { setTheme } from '@services';

const Book = lazy(() => import('@views/Book/Book'));
const Dashboards = lazy(() => import('@views/Dashboards/Dashboards'));
const Home = lazy(() => import('@views/Home/Home'));
const Sales = lazy(() => import('@views/Sales/Sales'));
const Tariff = lazy(() => import('@views/Tariff/Tariff'));

export default function App() {
    useEffect(() => {
        setTheme();
    }, []);

    return (
        <Layout>
            <Routes>
                <Route path="/book" element={<Book />} />
                <Route path="/dashboards" element={<Dashboards />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/tariff" element={<Tariff />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </Layout>
    );
}
