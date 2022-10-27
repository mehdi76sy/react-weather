import logo from './logo.svg';
import './App.css';
import Search from './components/search/Search';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search
        onSearchChange={handleOnSearchChange}
      />
    </div>
  );
}

export default App;
