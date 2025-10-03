import TopNavigation from "./components/TopNavigation";
import Profile from "./components/Profile";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <TopNavigation />
      <div className="App p-18 flex flex-col gap-10">
        <div className="flex">
          <Profile />
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
