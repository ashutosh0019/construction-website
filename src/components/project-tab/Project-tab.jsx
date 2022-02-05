import { useState } from "react";
import OngoingProject from "../onGoingProject/OngoingProject";
import Pdata from "../../Pdata";
import "./Project-tab.css";

function ProjectTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <section>
    <div className="container-tab">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          ONGOING PROJECT
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          UPCOMING PROJECT
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          COMPLETED PROJECT
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
        <div className="row gy-4 mr-3 pt-4">
          
        {
          Pdata.map((val, ind)=>{
            return <OngoingProject
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
            />
          })
        }     
        </div>

        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
          
        </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default ProjectTab;