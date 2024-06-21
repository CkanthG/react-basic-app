// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// import Alert from "./components/Alert";

function App() {
  // let cities = [
  //   "Hyderabad",
  //   "Secundrabad",
  //   "Warangal",
  //   "Hanmakonda",
  //   "Jangaon",
  //   "Nalgonda",
  //   "Medak-Malkajgiri",
  // ];
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible === true && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        onButtonCustomClick={() => setAlertVisibility(true)}
        // color="secondary"
      >
        My Custom React Button
      </Button>
      {/* <Alert>
        Hello <span>Welcome to </span>React
      </Alert> */}
      {/* <ListGroup
        cities={cities}
        heading="Cities"
        onSelectedCity={(city: string) => console.log(city)}
      /> */}
    </div>
  );
}

export default App;
