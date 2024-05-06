import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CustomCard(props) {
  const { descricao, enderecoImagem, nomeAnime } = props;

  return (
    <>
      <Card sx={{ maxWidth: 200 }} id="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={enderecoImagem}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {nomeAnime}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descricao}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

CustomCard.propTypes = {
  descricao: PropTypes.string.isRequired,
  enderecoImagem: PropTypes.string.isRequired,
  nomeAnime: PropTypes.string.isRequired,
};

export default CustomCard;
