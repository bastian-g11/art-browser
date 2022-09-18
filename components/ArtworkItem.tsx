const ArtworkItem = ({ title, principalOrFirstMaker, links, webImage }) => {
  return (
    <div>
      <img src={webImage.url} alt='' />
      <p>{title}</p>
      <a href={links.web}>Link to the Rijksmuseum site</a>
    </div>
  );
};

export { ArtworkItem };
