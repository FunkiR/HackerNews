import {createRoot} from 'react-dom/client';
import App from './App';
import './locales';
import enableMocking from './msw/enableMocking';

export const container = document.getElementById('root') as HTMLDivElement;

const root = createRoot(container);

enableMocking().then(() => root.render(<App />));
