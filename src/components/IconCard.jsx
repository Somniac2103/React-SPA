import { Link } from "react-router-dom";

const IconCard = ({ target }) => {
  if (!target) return null;

   const { filePath, label, icon } = target;

  return (
    <Link
        to={filePath}
        className="icon-card"
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </Link>
  );
};

export default IconCard;