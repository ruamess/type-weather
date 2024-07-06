import WeatherScreen from "./screens/WeatherScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Route, Routes } from 'react-router-dom';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import { useEffect } from "react";


const App = () => {
  const { toasts } = useToasterStore();
  const MAX_TOASTS = 3;

  useEffect(() => {
    if (toasts.length > MAX_TOASTS) {
      toasts
        .slice(MAX_TOASTS)
        .forEach((t) => toast.dismiss(t.id));
    }
  }, [toasts]);


  return (
    <div className="app overflow-y-auto h-64 bg-background min-h-screen">
      <Toaster gutter={1} toastOptions={{ style: { background: '#333', color: 'white', marginTop: 40, width: 250, height: 50 } }} />
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/weather' element={<WeatherScreen />} />
      </Routes>
    </div>
  )
}

export default App;
