import PropTypes from "prop-types";
import { Toolbar, Typography, Tooltip, IconButton } from "@mui/material";
import AdicionarIcon from "@mui/icons-material/Add";

function BarraTabela(props) {
  const { numSelected, funcaoAbrirAdicionar } = props;

  return (
    <Toolbar style={{ background: "antiquewhite" }}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Tooltip title="Delete">
          <IconButton onClick={funcaoAbrirAdicionar()}>
            <AdicionarIcon />
          </IconButton>
        </Tooltip>
      )}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
  );
}

BarraTabela.propTypes = {
  numSelected: PropTypes.number.isRequired,
  funcaoAbrirAdicionar: PropTypes.func.isRequired,
};

export default BarraTabela;
