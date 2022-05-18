import  {ListItem} from "../";
import "./List.css"

export default function List({ data }) {
  return (
    <section className="List">
      <div className="List--container">
        {data.map(item => <ListItem {...item} key={item.id}  state_name={item.address.state_name}/>)}
      </div>
    </section>
  )
}