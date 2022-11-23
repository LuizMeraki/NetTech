import { AuthContextProvider } from './context/AuthContext';
import { AppRoutes } from './routes/AppRoutes';


const App = () => {
  return (
    <AuthContextProvider>
      <AppRoutes />
    </AuthContextProvider>
  )
}

export default App;