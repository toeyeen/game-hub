import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme, ThemePanel } from '@radix-ui/themes';
import App from './App.tsx'
import '@radix-ui/themes/styles.css';
import './index.css'
import 'virtual:uno.css'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="indigo" grayColor="sand" radius="large" scaling="100%">
      <App />
    </Theme>
  </React.StrictMode>,
)
