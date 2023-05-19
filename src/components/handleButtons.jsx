const handleEdit = (setContextMenuData, setContextMenuPosition, setContextMenuOpen) => {
  setContextMenuData(null);
  setContextMenuPosition(null);
  setContextMenuOpen(false);
  console.log("edit");
};

const handleClose = (setContextMenuData, setContextMenuPosition, setContextMenuOpen) => {
  setContextMenuData(null);
  setContextMenuPosition(null);
  setContextMenuOpen(false);
  console.log("close");
};

const handleEditClick = (setShowInput, setContextMenuData, setContextMenuPosition, setContextMenuOpen) => {
  setShowInput(true);
  console.log("edit");
 };
 
 

const insiderButtons = { handleEdit, handleClose, handleEditClick };

export default insiderButtons;
