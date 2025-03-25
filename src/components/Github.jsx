import React, { useEffect, useRef, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return;
    fetchedOnce.current = true;

    fetch("https://api.github.com/search/repositories?q=user:Kunal1101")
      .then((response) => response.json())
      .then((data) => {
        setData(data.items);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <ul className="p-4">
        {data.map((repo) => (
          <li>
            <a className="text-blue-600" href={repo.html_url} key={repo.id}>
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Github;
