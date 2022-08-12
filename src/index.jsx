import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Theme from "./components/theme/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={Theme}>
<React.StrictMode><App/></React.StrictMode>
</ThemeProvider>
);


