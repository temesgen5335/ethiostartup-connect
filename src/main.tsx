import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// This is the application's entry point
createRoot(document.getElementById("root")!).render(<App />);
