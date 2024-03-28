import { AppProvider } from "./providers/providers";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <AppProvider>
      <main className="dark text-foreground bg-background">
        <AppRouter />
      </main>
    </AppProvider>
  );
}

export default App;
