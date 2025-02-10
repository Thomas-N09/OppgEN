export default function Dish(props) {
  return (
    <div className="dish-card">
      <h3 className="card-title">{props.data.tittel}</h3>
      <h4 className="card-category">{props.data.kategori}</h4>
      <p className="card-text">{props.data.ingredienser}</p>
      <h3 className="card-price">{props.data.pris}</h3>
    </div>
  );
}
