import { useNavigate } from "react-router-dom";

function ManageDropdownItem({ label, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="manage-dropdown-item" onClick={handleClick}>
      {label}
    </div>
  );
}

export default ManageDropdownItem;