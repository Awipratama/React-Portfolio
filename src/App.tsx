import TopNavigation from "./components/TopNavigation";
import Profile from "./components/HeroProfile";
// import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <TopNavigation />
      <div className="App flex flex-col gap-10">
        <div>
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
