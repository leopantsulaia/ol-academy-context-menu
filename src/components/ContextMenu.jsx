import React, { useState } from "react";
import data from "./data";
import "./ContextMenu.scss";
import utilities from "./utilities";
import handleButtons from "./handleButtons";

const { listColors, listItems: editListItems } = data;
const { handleContextMenu, handleOutsideClick } = utilities;
const { handleClose, handleEditClick } = handleButtons;

const ContextMenu = () => {
  const [contextMenuPosition, setContextMenuPosition] = useState(null);
  const [contextMenuData, setContextMenuData] = useState(null);
  const [, setContextMenuOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [listItems, setListItems] = useState(editListItems);
  const [editedItemIndex, setEditedItemIndex] = useState(null);

  const handleSaveClick = (itemIndex) => {
    setListItems((prevListItems) => prevListItems.map((item, index) => (index === itemIndex ? editedText : item)));
    setEditedText("");
    handleClose(setContextMenuData, setContextMenuOpen, setContextMenuPosition);
  };

  //return context
  return (
    <div>
      <div onClick={() => handleOutsideClick(setContextMenuData, setContextMenuPosition)}>
        <ul>
          {listItems.map((item, index) => (
            <li
              key={index}
              className='list-item'
              style={{
                backgroundColor: listColors[index % listColors.length],
              }}
              onContextMenu={(event) => {
                handleContextMenu(event, item, setContextMenuData, setContextMenuPosition, setContextMenuOpen);
                setEditedItemIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {contextMenuPosition && (
        <ul
          className='context-menu-position'
          style={{
            top: contextMenuPosition.y,
            left: contextMenuPosition.x,
          }}
        >
          <li>
            {contextMenuData}
            <div>
              <button
                className='popup-edit'
                onClick={() => handleEditClick(setShowInput, setContextMenuData, setContextMenuPosition, setContextMenuOpen)}
              >
                edit
              </button>
              <button
                className='popup-close'
                onClick={() => handleClose(setContextMenuData, setContextMenuPosition, setContextMenuOpen)}
              >
                close
              </button>
            </div>
            {showInput && (
              <input
                type='text'
                className='popup-input'
                onChange={(event) => setEditedText(event.target.value)}
              />
            )}
            <button onClick={() => handleSaveClick(editedItemIndex)}>save</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ContextMenu;
