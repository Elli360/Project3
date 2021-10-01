import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function BorrowedHandTools() {

  const [categories, setCategories] = useState([]);
  const [categoryDataTrue, setCategoryDataTrue] = useState(false);
  const LoadBorrowableTools = async () => {
    const first = await api.getCategories();
    const res = await first.data[1].tools;
    setCategories(res);
  };

  useEffect(() => {
    LoadBorrowableTools()
  }, []);

  const NoBorrowableTools = () => { return (<h3>All these Tools originate from this ToolShed &there4; Never Borrowed</h3>) };

  const ToolsNotBorrowed = () =>
    categories.filter((row) => {
      if (row.borrowed === true) { return row } else {
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

  const DefaultNotBorrowed = () => {
    if (ToolsNotBorrowed() == "")
      return NoBorrowableTools();
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
      <ToolsNotBorrowed/>
      {categoryDataTrue && <DefaultNotBorrowed />}
    </>
  )
};

export default BorrowedHandTools;
