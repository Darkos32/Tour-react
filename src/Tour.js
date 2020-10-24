import React, { useState } from "react";
const Tour = ({ name, img, descriptionResume, descriptionFull, price,not,id }) => {
  const [resumeFull, setResumeFull] = useState(false);

  return (
    <article>
      <img src={img} alt={name} />
      <footer>
        <h3>{name}</h3>
        <h3 className="price">{price}</h3>
        <p>
          {resumeFull ? descriptionFull : descriptionResume}
          <button
            onClick={() =>
              setResumeFull((prev) => {
                return !prev;
              })
            }
            className="show"
          >
            {resumeFull ? "Show Less" : "Show More"}
          </button>
        </p>
        <button onClick={()=>{not(id)}}   className="not-interested">Not Interested</button>
      </footer>
    </article>
  );
};
export default Tour;
