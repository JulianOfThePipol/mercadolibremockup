import { Link } from "react-router-dom";
import "./ListItem.css"

export default function ListItem(props) {
    const {id, thumbnail, price, title, state_name} = props;

  return (
    <Link to={`/items/${id}`}>
      <article className="ListItem">
          <img
            className="ListItem--img"
            src={thumbnail}
            alt="thumbnail"
          />
            <main className="ListItem--main--title">{title}</main>
            <header className="ListItem--main--price">$ {price.toLocaleString('es', {useGrouping:true})}</header>
        <div className="ListItem--stateName">
          {state_name}
        </div>
      </article>
      </Link>
  );
}