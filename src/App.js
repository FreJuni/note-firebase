import "./App.css";
import AddNotes from "./components/addnotes";
import Note from "./components/Note";
import NavBar from "./components/Nav.";
import { useEffect, useState } from "react";
import Intro from "./components/Intro";

function App() {
  const [notes, setNotes] = useState([]);
  const [err, setIsErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    //get notes //
    try {
      const response = await fetch(
        "https://firenote-a9c70-default-rtdb.firebaseio.com/noteapp.json"
      );

      if (!response.ok) {
        throw new Error("Can'nt get back from database. Something went wrong.");
      }

      const data = await response.json();

      const modified = [];

      for (let key in data) {
        modified.push({
          id: key,
          note: data[key],
        });
      }
      setNotes(modified);
    } catch (err) {
      setIsErr(err.message);
    }
    setLoading(false);
  };

  // get notes when website start//
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="secton-container">
      <div className="app-con">
        <NavBar notes={notes} />
        {!err && !loading && <AddNotes getData={getData} />}
      </div>
      {loading && <h1 className="loading-data">Loading data ...</h1>}
      {err && <h3 className="error">{err}</h3>}
      {!err && !loading && (
        <>
          {notes.length < 1 ? (
            <Intro />
          ) : (
            notes.map((item, index) => {
              return (
                <Note key={index} index={index} item={item} getData={getData} />
              );
            })
          )}
        </>
      )}
    </section>
  );
}

export default App;
