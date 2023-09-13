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
    <section className="flex-1 h-screen">
      {squeeks.map(squeek => {
        return (
          <section key={squeek.id} className="flex max-w-xl flex-col items-start justify-between">
            <section className="flex items-center gap-x-4 text-xs">
              <h3>{squeek.author.username}</h3>
              <h2>{squeek.author.firstName}</h2>
              <section >
                <p className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{squeek.text}</p>
                <p className="text-gray-500">{squeek.dateTimeCreated}</p>
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
