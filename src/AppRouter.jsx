import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import { Counter } from './state-demo/counter';
import PromiseDemo from './promise-demo/promise-demo';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/promise-demo' element={<PromiseDemo />} />
            </Routes>
        </BrowserRouter>
    )
}