import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  

  function deleteHandler(event) {
    event.preventDefault();
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [id]);
  console.log(data);
  return (
    <div>
      {loading && <h1>Deleting....</h1>}

      {!data ? (
        <h2>Loading...</h2>
      ) : (
        <article className="w-70 border border-secondary m-2">
          <h3>USER-ID: {data.userId}</h3>
          <h5>{data.title}</h5>
          <p>{data.body}</p>
        </article>
      )}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Article;
