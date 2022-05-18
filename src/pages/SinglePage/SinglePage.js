
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks";

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
            <div className="SinglePage--route">
              {category.name} {'>'}
            </div>
          ))}
      </header>
      <main className="SinglePage--main">
        <section>
          <img src={data.pictures[0].url} alt="Imagen de producto" />
          <section>
            <h3>Descripcion del producto</h3>
            <p>{description.plain_text}</p>
          </section>
        </section>
        <sidebar>
          {data.condition === "new" ? "Nuevo" : "Usado"}
          {data.title}
          $ {data.price}
          <button>COMPRAR</button>
        </sidebar>
      </main>
    </div>
  );
}