import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import { Counter } from './state-demo/counter';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/counter' element={<Counter />} />
            </Routes>
        </BrowserRouter>
    )
}