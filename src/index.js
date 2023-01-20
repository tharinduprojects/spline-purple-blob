import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import GlobalStyle from './assets/styled/global.styled';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>
);
