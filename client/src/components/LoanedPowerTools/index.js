import React, { useEffect, useState } from "react";
import api from "../../utils/api";

//make category.id # a prop so the # of components can be divided by 5
function LoanedPowerTools() {

  const [categories, setCategories] = useState([]);

  const LoadLoanableTools = async () => {
    const first = await api.getCategories();
    const res = await first.data[0].tools;
    setCategories(res);
  }

  useEffect(() => {
    LoadLoanableTools()
  },
    []);

  const NoLoanableTools = () => { return (<h3>No Available Tools</h3>) }

  const ToolsAvailable = () => categories.filter((row) => {
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
    if (ToolsAvailable() === "" || [])
      return NoLoanableTools();

    return null;
  }

  return (
    <>
      {ToolsAvailable()}
      {DefaultNotAvailable()}
    </>
  )
}

export default LoanedPowerTools;
