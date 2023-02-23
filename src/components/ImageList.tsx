import ImageShow from "./ImageShow";
function ImageList({images}) {

  const renderedImages = images.map(image => {return <ImageShow image={image} />})

  return (
  <div>
    {images.length}
    {renderedImages}

  </div>);
}

export default ImageList;
