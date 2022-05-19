
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import "./SinglePage.css"

export default function View() {
  const params = useParams();
  const { data } = useFetch({ url: `/items/${params.id}` });
  const { data: description } = useFetch({
    url: `/items/${params.id}/description`,
  });
  const { data: categories } = useFetch({ url: `/categories/${data?.category_id}` });

  if (!data || !categories || !description) {
    return <div>Loading...</div>;
  }

  return (
    <div className="SinglePage">
      <header className="SinglePage--header">
          {categories?.path_from_root.map(category => (
            <>
              <p className="SinglePage--arrow">{'>'}</p>{category.name} 
            </>
          ))}
      </header>
      <main className="SinglePage--main">
        <section className="SinglePage--Section">
          <img src={data.pictures[0].url} alt="Imagen de producto" className="SinglePage--img"/>
          <section>
            <h3 className="SinglePage--mainTitle">Descripcion del producto</h3>
            <p className="SinglePage--descripcion">{description.plain_text}</p>
          </section>
        </section>
        <sidebar className="SinglePage--Sidebar">
          <p className="SinglePage--Sidebar--condicion">{data.condition === "new" ? "Nuevo" : "Usado"}</p>
          <h3 className="SinglePage--Sidebar--titulo">{data.title}</h3>
          <h3 className="SinglePage--Sidebar--precio">$ {data.price.toLocaleString('de', {useGrouping:true})}</h3>
          <button className="SinglePage--buy">Comprar ahora</button>
        </sidebar>
      </main>
    </div>
  );
}