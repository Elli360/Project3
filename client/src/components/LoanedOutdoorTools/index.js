import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function LoanedOutdoorTools() {

  const [categories, setCategories] = useState([]);
  const [categoryDataTrue, setCategoryDataTrue] = useState(false);
  const LoadLoanableTools = async () => {
    const first = await api.getCategories();
    const res = await first.data[2].tools;
    setCategories(res);
  };

  useEffect(() => {
    LoadLoanableTools()
  }, []);

  const NoLoanableTools = () => { return (<h3>All Tools are in the ToolShed &there4; Available</h3>) };

  const ToolsNotAvailable = () =>
    categories.filter((row) => {
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
    });

  const DefaultNotAvailable = () => {
    if (ToolsNotAvailable() == "")
      return NoLoanableTools();
    return null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        setCategoryDataTrue(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ToolsNotAvailable/>
      {categoryDataTrue && <DefaultNotAvailable />}
    </>
  )
};

export default LoanedOutdoorTools;
