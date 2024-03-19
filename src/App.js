import img from "./assets/ing.jpg";
import { useState } from "react";
import Title from "./components/Title";
import { Fragment } from "react";

function App() {
  const [name, setName] = useState("Azimjon");

  const [showContent, setShowContent] = useState(true);

  const [events, setEvents] = useState([
    { title: "akhror's birthday party", id: 1 },
    { title: "doniyor's live stream", id: 2 },
    { title: "match: manchester united vs barcelona", id: 3 },
  ]);

  // change item
  const handleClick = () => {
    setName("Sardor");
  };

  // delete items way 1
  // const handleDelete = (id) => {
  //   const filteredEvent = events.filter((event) => {
  //     return event.id !== id;
  //   });
  //   setEvents(filteredEvent);
  // };

  // delete items way 2
  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  let subtitle = "My events";

  return (
    <>
      <Title title="Azimjon's Kingdom 👑" subtitle={subtitle} />;
      <img src={img} />
      <h1>Mein name ist {name}</h1>
      <button onClick={handleClick}>Change name</button>
      <hr />
      <br />
      {showContent && (
        <button onClick={() => setShowContent(false)}>Hide content</button>
      )}
      {!showContent && (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
      {showContent && (
        <div>
          {events.length == 0 && <h3>No content</h3>}
          {events.map((event) => {
            return (
              <Fragment key={event.id}>
                <h2>{event.title}</h2>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              </Fragment>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
