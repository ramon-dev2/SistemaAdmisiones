import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/source-serif-4/400.css';
import App from './app/App';
import './styles/globals.css';
const client = new QueryClient();
// Pages serves static files without SPA rewrites. Hash routes survive direct links and reloads.
const Router = import.meta.env.MODE === 'github-pages' ? HashRouter : BrowserRouter;
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><QueryClientProvider client={client}><Router><App/></Router></QueryClientProvider></React.StrictMode>);
