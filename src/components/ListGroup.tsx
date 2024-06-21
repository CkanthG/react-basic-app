// import { MouseEvent } from "react";

import { useState } from "react";

// interface Props{}

interface ListGroupProps {
  cities: string[];
  heading: string;
  onSelectedCity: (city: string) => void;
}

// function ListGroup(props: ListGroupProps) {
function ListGroup({ cities, heading, onSelectedCity }: ListGroupProps) {
  //   let selectedIndex = 0;
  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   const [name, setName] = useState('');
  //   const arr = useState(-1);
  //   arr[0] // variable declaration (selectedIndx)
  //   arr[1] // updator function
  //   cities = [];

  //   const message = cities.length === 0 ? <p>No Items Found</p> : null;

  //   const getMessage = () => {
  //     return cities.length === 0 ? <p>No Items Found</p> : null;
  //   };

  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {/* {cities.length === 0 ? <p>No Items Found</p> : null} */}
      {/* {props.cities.length === 0 && <p>No Items Found</p>} */}
      {cities.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            // className="list-group-item"
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedCity(city);
            }}
            // onClick={handleClick}
            // onClick={(event) => console.log(event)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
