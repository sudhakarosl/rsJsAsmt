import FileIcon from "../fileIcon/FileIcon";
import FolderIcon from "../folderIcon/FolderIcon";
import "./singleFileAndFolder.css";
const SingleFileAndFolder = ({
  items,
  toggleFolder,
  handleNameChange,
  addNewFileOrFolder,
  handleInputFocus,
  show,
}) => {
  return items.map((item) => (
    <div key={item.id}>
      <div
        className="singleFileAndFolder"
        style={{
          backgroundColor: item.isFolder ? "lightgrey" : "transparent",
        }}
      >
        <span
          className="singleFileAndFolderName"
          onClick={() => {
            toggleFolder(item.id, "toggle");
          }}
        >
          {item.isFolder ? <FolderIcon /> : <FileIcon />}
          {item.name ? (
            item.name
          ) : (
            <input
              autoFocus
              type="text"
              onBlur={(e)=>handleInputFocus(e,item,items)}
              onKeyDown={(e) => handleNameChange(e, item, items)}
            />
          )}
        </span>

        {item.isFolder === true && item.name && (
          <div>
            <button onClick={() => addNewFileOrFolder(item, true)}>
              Folder +
            </button>
            <button onClick={() => addNewFileOrFolder(item, false)}>
              File +
            </button>
          </div>
        )}
      </div>
      <div>
        {show[item.id] && item.isFolder && (
          <div style={{ marginLeft: "20px" }}>
            <SingleFileAndFolder
              items={item.items}
              toggleFolder={toggleFolder}
              handleNameChange={handleNameChange}
              handleInputFocus={handleInputFocus}
              addNewFileOrFolder={addNewFileOrFolder}
              show={show}
            />
          </div>
        )}
      </div>
    </div>
  ));
};

export default SingleFileAndFolder;
