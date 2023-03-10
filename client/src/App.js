import { useState, useEffect } from "react";
import Greeting from "./components/Greeting";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);


  // //example api call
  // const emissions_london = fetch('https://beta3.api.climatiq.io/estimate', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization' : `Bearer ${process.env.REACT_APP_API_KEY}`
  //   },
  //   body: JSON.stringify({
  //     "emission_factor": {
  //       "activity_id": "passenger_vehicle-vehicle_type_bicycle-fuel_source_na-distance_na-engine_size_na"
  //   },
  //   "parameters":
  //       {
  //         "distance": 100,
  //         "distance_unit": "mi"
  //       }
  //     })
  // }).then(data => data.json())
  // .then(data => console.log(data))
  const onHandleLogin = (loginData) => {
    console.log(loginData)
  }
 
  return (
    <div className="App">
      <Greeting />
      <Login submit={onHandleLogin}/>
      <Signup />
    </div>
 
  );
}

export default App;