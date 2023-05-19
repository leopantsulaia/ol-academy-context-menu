import React, { useState } from "react";
import data from "./data";
import "./ContextMenu.scss";
import utilities from "./utilities";
import handleButtons from "./handleButtons";

const { listColors, listItems } = data;
const { handleContextMenu, handleOutsideClick } = utilities;
const { handleEdit, handleClose, handleEditClick } = handleButtons;

const ContextMenu = () => {
  const [contextMenuPosition, setContextMenuPosition] = useState(null);
  const [contextMenuData, setContextMenuData] = useState(null);
  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);

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
              onContextMenu={(event) => handleContextMenu(event, item, setContextMenuData, setContextMenuPosition, setContextMenuOpen)}
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
              />
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default ContextMenu;
