const ExternalLinkIconCard = ({ target }) => {
  if (!target) return null;

   const { filePath, label, icon } = target;

  return (
    <a
        href={filePath}
        className="externalLinkIconCard"
        target="_blank"
        rel="noopener noreferrer"
    >
      <img src={icon} alt="" loading="lazy"/>
      <span>{label}</span>
    </a>
  );
};

export default ExternalLinkIconCard;