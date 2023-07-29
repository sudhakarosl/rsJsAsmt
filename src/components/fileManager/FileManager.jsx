import React, { useEffect, useState } from "react";
import jsonData from "../../data";
import SingleFileAndFolder from "../singleFileAndFolder/singleFileAndFolder";
import { v4 as uuid } from "uuid";
import "./fileManager.css";

const FileManager = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || jsonData
  );

  const [showDelete, setShowDelete] = useState(false);

  const [show, setShow] = useState({});

  useEffect(() => {
    showDelete && localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleChange = () => {
    setShowDelete((current) => !current);
  };

  const handleClear = () => {
    setData(jsonData);
  };

  const toggleFolder = (folderId, type) => {
    setShow((prevState) => ({
      ...prevState,
      [folderId]: type === "toggle" ? !prevState[folderId] : true,
    }));
  };

  const addNewFileOrFolder = (folder, isFolder) => {
    const newFileOrFolder = {
      id: uuid(),
      name: "",
      isFolder: isFolder,
      items: [],
    };
    toggleFolder(folder.id, "open");
    folder.items.push(newFileOrFolder);
    setData([...data]);
  };

  const handleNameChange = (event, item) => {
    if (event.key === "Enter") {
      item.name = event.target.value || "new file";
      setData([...data]);
    }
  };

  return (
    <div className="fileManager">
      <SingleFileAndFolder
        items={data}
        toggleFolder={toggleFolder}
        handleNameChange={handleNameChange}
        addNewFileOrFolder={addNewFileOrFolder}
        show={show}
      />
      <div className="fileManagerInputContainer">
        <div>
          <label>Save data in localStorage</label>
          <input
            className="fileManagerInput"
            value={showDelete}
            onChange={handleChange}
            type="checkbox"
          />
        </div>
        {showDelete && <button onClick={handleClear}>Clear Items</button>}
      </div>
    </div>
  );
};

export default FileManager;
