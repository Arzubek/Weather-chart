import { AppContextProvider, Sidebar, Content } from "@components/index";

function App() {
  return (
    <AppContextProvider>
      <main className="min-h-screen">
        <Sidebar />
        <Content />
      </main>
    </AppContextProvider>
  );
}

export default App;
