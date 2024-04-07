import axios from "axios";
import  {useState} from "react";
import "./styles.css"

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  function search(){
    axios.get(url).then((response) =>{
      setdata(response.data);
        }).catch((response) => {
          setdata({
            name : "404 City not found"
          });
        })
    setlocation("")
  }
  function heandleSearch(event){
    if(event.key === "Enter"){
      search()
    }
    
  }
  function handelClick(){
    search()
  }
  const [location, setlocation] = useState("")
  const [data, setdata] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
  
  return (
    <div className="app">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Montserrat:ital,wght@0,100;1,700;1,900&family=Raleway:ital,wght@0,300;0,500;0,600;0,700;0,900;1,500;1,600&family=Righteous&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Seymour+One&family=Ubuntu:wght@300;500;700&display=swap')
</style>
      <div className="container">
        <div className="top">
          <h1>Weather-App</h1>
        <input className="custom-input" onKeyPress={heandleSearch}  value={location} onChange={e => setlocation(e.target.value)} placeholder="enter city"/>
        <button className="custom-submit" onClick={handelClick}> search</button>
        </div>
        <div className="mid">
          <div className="city">{data.name ? data.name : "city"}</div>
          <div className="temparature">{data.main ? data.main.temp + "C"  :"temp"}</div>
          <div className="discription"> {data.weather ? data.weather[0]['main'] : ""}</div>
        </div>
        <div className="bottom">
          <div className="feels box">{data.main ?   data.main.feels_like   :""} <br/> Feels like </div>
          <div className="humidity box">{data.main ?   data.main.humidity   :""} <br/>Humidity </div>
          <div className="wind box">{data.wind ? data.wind.speed + " MPH": ""} <br/>Wind</div>
        </div>
      </div>
    </div>
  );
}

export default App;
