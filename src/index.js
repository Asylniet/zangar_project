import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from "./context/themecontext";
import { store } from './store/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <StoreProvider store={store}>
    <Suspense>
      <Router>
        <ThemeProvider>
            <App />
        </ThemeProvider>
      </Router>
    </Suspense>
          </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
