import { useState, useEffect } from "react";

const ReSqueek = ({ squeekID }) => {

  const [reSqueek, setReSqueek] = useState();

  useEffect(() => {
    const getSqueeks = async () => {
      try{
        const response = await fetch(`/api/squeeks/resqueek/${squeekID}`);
        const data = await response.json();
        setReSqueek(data);
      } catch (err) {
        console.log(err)
      }
    }
    getSqueeks();
  }, []);

  return (
    <>
      { reSqueek ?
          <section>
            <section>
              <h3>{reSqueek.author.username}</h3>
              <h2>{reSqueek.author.firstName}</h2>
              <section>
                <p>{reSqueek.text}</p>
                <p>{reSqueek.dateTimeCreated}</p>
              </section>
            </section>
          </section>
          : null
      }
    </>
  )
}

export default ReSqueek