import { useEffect, useState } from "react";
import ListContainer from "../components/ListComponents/List/List";
import Title from "../components/Title";
import AddList from "../components/ListComponents/AddList";
import Header from "../components/Header/Header";

function Lists() {
  const [listas, setListas] = useState(() => {
    const stored = localStorage.getItem("listas");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("listas", JSON.stringify(listas));
  }, [listas]);

  return (
    <div>
      <Header section={'lists'} sectionName={"Suas listas"}/>
      <div className="divPrincipal">
        <div className="container">
          <AddList listas={listas} setListas={setListas} />
        </div>

        <div className="containerAddTasks">
          <Title sectionName="Listas salvas" nameClass="subTitles" />
          <ListContainer listas={listas} setListas={setListas} />
        </div>
      </div>
    </div>
  );
}

export default Lists;
