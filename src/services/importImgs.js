function importAll(r) {
    return r.keys().map(r);
  }
  
  const imgs = importAll(require.context('../media/profile pictures', false, /\.(png|jpe?g|svg)$/));
  // console.log(imgs)
export default imgs