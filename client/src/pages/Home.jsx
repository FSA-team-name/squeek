import { useState, useEffect } from "react";
import ReSqueek from '../components/ReSqueek'

const Home = () => {

  const [squeeks, setSqueeks] = useState([]);

  useEffect(() => {
    const getSqueeks = async () => {
      try{
        const response = await fetch('/api/squeeks');
        const data = await response.json();
        setSqueeks(data);
      } catch (err) {
        console.log(err)
      }
    }
    getSqueeks();
  }, [])

  return (
    <section className="p-7 text-2xl font-semibold flex-1 h-screen">
      {squeeks.map(squeek => {
        return (
          <section>
            <section>
              <h3>{squeek.author.username}</h3>
              <h2>{squeek.author.firstName}</h2>
              <section>
                <p>{squeek.text}</p>
                <p>{squeek.dateTimeCreated}</p>
              </section>
              <section>
                {squeek.reSqueekId ? <ReSqueek squeekID={squeek.reSqueekId} /> : null}
              </section>
            </section>

          </section>
        )
      })}
    </section>
  );
};

export default Home;
