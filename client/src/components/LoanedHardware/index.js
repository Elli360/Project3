
import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function LoanedHardware() {

  const [categories, setCategories] = useState([]);
  const LoadLoanableTools = async () => {
    const first = await api.getCategories();
    const res = await first.data[4].tools;
    setCategories(res);
  }

  useEffect(() => {
    LoadLoanableTools()
  }, []);

  const NoLoanableTools = () => { return (<h3>All Tools are in the ToolShed &there4; Available</h3>) }

  const ToolsNotAvailable = () => categories.filter((row) => {
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
    if (ToolsNotAvailable() == "")
      return NoLoanableTools();

    return null;
  }
  //Does not affect component at all or in desired way
  // if (!ToolsNotAvailable()) {
  //   return (
  //     <div>
  //       <p>Fetching tool availablility...</p>
  //     </div>
  //   );
  // }
  return (
    <>
      {ToolsNotAvailable()}
      {ToolsNotAvailable() && <DefaultNotAvailable/>}
    </>
  )
}

export default LoanedHardware;
