import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./components/Card";
import CompanyImage from "./components/CompanyImage";
import CompanyName from "./components/CompanyName";
import ImportantTag from "./components/ImportantTag";
import Info from "./components/Info";
import Infos from "./components/Infos";
import JobTitle from "./components/JobTitle";
import Tag from "./components/Tag";
import Tags from "./components/Tags";

function App() {
  const [userData, setUserData] = useState([]);
  const [tags, setTag] = useState(new Set());

  useEffect(() => {
    async function getData() {
      const response = await fetch("../data.json");
      const data = await response.json();

      data.forEach((user) => {
        user.tags = [user.role, user.level, ...user.languages, ...user.tools];
      });
      setUserData(data);
    }

    getData();
  }, []);

  function onSelectTag(tag) {
    const updatedTags = structuredClone(tags).add(tag);

    setTag(updatedTags);
  }

  console.log(tags);

  return (
    <main>
      {[...tags].length > 0 && <div>{[...tags].map(() => <p>azdsqdq</p>)}</div>}
      {userData
        .filter((user) =>
          [...tags].map((tag) => user.tags.includes(tag)).every(Boolean)
        )
        .map((user) => (
          <Card key={user.id}>
            <CompanyImage imgSrc={user.logo} imgAlt={user.company} />
            <CompanyName name={user.company} />
            {user.new && <ImportantTag tag="NEW!" color="#5CA5A5" />}
            {user.featured && <ImportantTag tag="FEATURED" color="#2B3939" />}
            <JobTitle title={user.position} />
            <Infos>
              <Info info={user.postedAt} />
              <Info info={user.contract} />
              <Info info={user.location} />
            </Infos>
            <Tags>
              {user.tags.map((tag) => (
                <Tag key={tag} onClick={onSelectTag} tag={tag} />
              ))}
            </Tags>
          </Card>
        ))}
    </main>
  );
}

export default App;
