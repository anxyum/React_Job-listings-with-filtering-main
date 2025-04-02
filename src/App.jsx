import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./components/Card";
import CompanyImage from "./components/CompanyImage";
import CompanyName from "./components/CompanyName";
import Tile from "./components/Tile";
import Tiles from "./components/Tiles";
import Info from "./components/Info";
import Infos from "./components/Infos";
import JobTitle from "./components/JobTitle";
import Tag from "./components/Tag";
import Tags from "./components/Tags";
import ActiveTags from "./components/activeTags";
import ActiveTag from "./components/activeTag";

function App() {
  const [userData, setUserData] = useState([]);
  const [tags, setTag] = useState([]);

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
    if (!tags.includes(tag)) {
      const updatedTags = [...tags, tag];

      console.log(updatedTags);
      setTag(updatedTags);
    }
  }

  console.log(tags);

  return (
    <main>
      <header></header>
      <ActiveTags>
        {tags.map((tag) => (
          <ActiveTag key={tag} content={tag} />
        ))}
      </ActiveTags>
      <div className="cards">
        {userData
          .filter((user) =>
            tags.map((tag) => user.tags.includes(tag)).every(Boolean)
          )
          .map((user) => (
            <Card key={user.id}>
              <CompanyImage imgSrc={user.logo} imgAlt={user.company} />
              <div className="info">
                <div className="company">
                  <CompanyName content={user.company} />
                  <Tiles>
                    {user.new && <Tile content="NEW!" color="#5CA5A5" />}
                    {user.featured && (
                      <Tile content="FEATURED" color="#2B3939" />
                    )}
                  </Tiles>
                </div>
                <JobTitle content={user.position} />
                <Infos>
                  <Info content={user.postedAt} />
                  <Info content={user.contract} />
                  <Info content={user.location} />
                </Infos>
              </div>
              <Tags>
                {user.tags.map((tag) => (
                  <Tag key={tag} onClick={onSelectTag} content={tag} />
                ))}
              </Tags>
            </Card>
          ))}
      </div>
    </main>
  );
}

export default App;
