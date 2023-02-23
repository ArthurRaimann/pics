function ImageShow({image}) {
  return <img  key={image.id} alt={image.id} src={image.urls.small} style={{width: '100px'}} />
}

export default ImageShow;
