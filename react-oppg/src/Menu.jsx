export default function Menu(props) {
  return (
    <div className="menu">
      <h3>{props.data.tittel}</h3>
      <h4>{props.data.kategori}</h4>
      <p>{props.data.ingredienser}</p>
      <h3>{props.data.pris}</h3>
    </div>
  );
}
