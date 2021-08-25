
import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function LoanedHardware() {

  const [categories, setCategories] = useState([]);

  const loadTools = async () => {
    const first = await api.getCategories();
    const res = await first.data[4].tools;
    setCategories(res);
  }

  useEffect(() => {
    loadTools()
  },
    []);

  const NoTools = () => { return (<h3>No Available Tools</h3>) }

  const toolsAvailable = categories.filter((row) => {
    if (row.available === false) { return row } else {
      return (
        null
      )
    }
  }).map((tool) => {
    return (
      <div className="toolDetail" >
        <ul>
          <li key={tool.id}>{tool.name}</li>
        </ul>
      </div>
    )
  })

  const DefaultNotAvailable = () => {
    if (toolsAvailable == "")
      return NoTools();

    return null;
  }

  return (
    <>
      {toolsAvailable}
      {DefaultNotAvailable()}
      {/* also works a component */}
      {/* <DefaultNotAvailable/> */}
    </>
  )
}

export default LoanedHardware;
