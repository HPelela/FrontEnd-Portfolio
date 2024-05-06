import Carousel from "react-multi-carousel";
import PropTypes from "prop-types";
import "react-multi-carousel/lib/styles.css";
import Card from "../Componentes/CustomCard";

function Carrosel(props) {
  const { listaAnimes } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 100 },
      items: 4,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        containerClass="first-carousel-container container"
      >
        {listaAnimes !== undefined &&
          listaAnimes.map((row) => (
            <Card
              key={row.name}
              descricao={row.descricao}
              nomeAnime={row.name}
              enderecoImagem={row.enderecoImagem}
            ></Card>
          ))}
      </Carousel>
    </>
  );
}

Carrosel.propTypes = {
  listaAnimes: PropTypes.object.isRequired,
};

export default Carrosel;
