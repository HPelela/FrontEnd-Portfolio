import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import BarraTabela from "../Componentes/BarraTabela";
import Cadastro from "../Cadastro/Cadastro";
import Carrosel from "../Componentes/Carrosel";

function Lista() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [lista, setLista] = useState([]);
  const [novoCadastro, setNovoCadastro] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setNovoCadastro(true);
  };

  const createData = (name, descricao, nota, enderecoImagem) => {
    return { name, descricao, nota, enderecoImagem };
  };

  const montarDadosIniciais = () => {
    const rows = [
      createData("Naruto", "", 8, "src/assets/imagens/naruto.webp"),
      createData("One Piece", "", 10, "src/assets/imagens/OnePiece.jpg"),
      createData(
        "Shangri-La Frontier",
        "",
        7,
        "src/assets/imagens/Shangri-laFrontier.png"
      ),
      createData("Sword Art Online", "", 9, "src/assets/imagens/sao.webp"),

      createData(
        "My Hero Academy",
        "",
        7.5,
        "src/assets/imagens/myHeroAcademy.jpg"
      ),
    ];

    return rows;
  };

  useEffect(() => {
    setLista(montarDadosIniciais());
    setNovoCadastro(false);
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} id="Menu" paddingBottom={2}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Minha Lista de Animes
            </Typography>
            <div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Carrosel listaAnimes={lista}></Carrosel>
      <BarraTabela
        numSelected={0}
        funcaoAbrirAdicionar={() => handleClickOpen}
      ></BarraTabela>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" fetcher>
          <TableHead>
            <TableRow>
              <TableCell>Animes</TableCell>
              <TableCell align="right">Notas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lista.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.nota}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {novoCadastro && <Cadastro abrirCadastro={novoCadastro}></Cadastro>}
    </>
  );
}

export default Lista;
