import img from "./assets/ing.jpg";
import { useState } from "react";
import Title from "./components/Title";
import { Fragment } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(true);

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

  // toogle modal function
  const closemodal = () => {
    setShowModal(false);
  };

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
      {/* Ma'lumot yuborish */}
      {/* <Modal>
        <h2>Azimjon Xolmirzayev ❄️</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          est.
        </p>
      </Modal> */}
      {/* Children props */}
      {showModal && (
        <Modal closemodal={closemodal}>
          <h2>Azimjon Xolmirzayev ❄️</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            impedit vel eius qui, blanditiis commodi consequuntur, laudantium
            earum voluptatibus molestias repudiandae. Repellendus, ducimus totam
            nisi molestiae excepturi obcaecati a incidunt, reprehenderit quis,
            neque similique facilis porro id dolorum consequuntur aliquam
            dolores perferendis sed voluptatibus nemo quia impedit quasi commodi
            architecto!
          </p>
          <a href="#">Subscribe</a>
        </Modal>
      )}
      <br />
      <br />
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show modal
      </button>
    </>
  );
}

export default App;
