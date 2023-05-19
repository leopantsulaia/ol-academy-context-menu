const handleContextMenu = (event, item, setContextMenuData, setContextMenuPosition) => {
  event.preventDefault();
  setContextMenuData(item);
  setContextMenuPosition({ x: event.clientX, y: event.clientY });
};

const handleOutsideClick = (setContextMenuData, setContextMenuPosition) => {
  setContextMenuData(null);
  setContextMenuPosition(null);
};

const utilities = { handleContextMenu, handleOutsideClick };

export default utilities;
