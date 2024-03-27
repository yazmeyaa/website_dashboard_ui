import { AppProvider } from "./providers/providers";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
