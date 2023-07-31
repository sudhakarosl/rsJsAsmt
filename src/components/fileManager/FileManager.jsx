import React, { useEffect, useState } from "react";
import jsonData from "../../data";
import SingleFileAndFolder from "../singleFileAndFolder/singleFileAndFolder";
import { v4 as uuid } from "uuid";
import "./fileManager.css";

const FileManager = () => {
  const [data, setData] = useState(
    localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : jsonData
  );
  const [localStorageVal, setLocalStorageVal] = useState(
    !!localStorage.getItem("data")
  );

  const [show, setShow] = useState({});

  useEffect(() => {
    if (localStorageVal) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

  const handleChange = () => {
    setLocalStorageVal(!localStorageVal);
    if (localStorageVal) {
      localStorage.clear();
      setData(jsonData);
    }
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

  const handleInputFocus = (event, item, items) => {
    if (event.target.value == "") {
      items.pop(item);
    }
    else{
      item.name = event.target.value;
      setData([...data]);
    }
    setData([...data]);
  };
  const handleNameChange = (event, item, items) => {
    if (event.key === "Enter") {
      item.name = event.target.value;
      setData([...data]);
    }
  };

  return (
    <div className="fileManager">
      <SingleFileAndFolder
        items={data}
        handleInputFocus={handleInputFocus}
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
            defaultChecked={localStorageVal}
            onChange={() => handleChange()}
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default FileManager;
