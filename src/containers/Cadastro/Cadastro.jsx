import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import * as yup from "yup";
import { useFormik } from "formik";

function Cadastro(props) {
  const { abrirCadastro } = props;
  const [lista, setLista] = useState([]);
  const [open, setOpen] = useState(abrirCadastro || false);

  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };

  const adicionarProduto = (valores) => {
    setLista([
      ...lista,
      createData(valores.anime, valores.descricao, valores.nota, ""),
    ]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validation = yup.object({
    anime: yup
      .string("Informe o produto")
      .required("Campo Produto é obrigatório"),
    nota: yup
      .string("Informe o preço")
      .required("Preço do produto é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      anime: "",
      descricao: "",
      nota: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      adicionarProduto(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <div style={{ paddingBottom: 50, paddingTop: 20 }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="anime"
                name="anime"
                label="Anime"
                value={formik.values.anime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.produto && Boolean(formik.errors.produto)}
                helperText={formik.touched.produto && formik.errors.produto}
                style={{ paddingBottom: 10 }}
              />
              <TextField
                fullWidth
                id="descricao"
                name="descricao"
                label="Descricao"
                value={formik.values.descricao}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.produto && Boolean(formik.errors.produto)}
                helperText={formik.touched.produto && formik.errors.produto}
                style={{ paddingBottom: 10 }}
              />
              <TextField
                fullWidth
                id="nota"
                name="nota"
                label="Nota"
                type="number"
                value={formik.values.nota}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.preco && Boolean(formik.errors.preco)}
                helperText={formik.touched.preco && formik.errors.preco}
              />
              {/* <div className="card">
                <FileUpload
                  name="demo[]"
                  url={"src/assets/imagens"}
                  multiple
                  accept="image/*"
                  maxFileSize={1000000}
                  emptyTemplate={
                    <p className="m-0">
                      Drag and drop files to here to upload.
                    </p>
                  }
                />
              </div> */}
              <Button
                color="primary"
                variant="contained"
                type="submit"
                style={{ marginTop: 5 }}
              >
                Submit
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

Cadastro.propTypes = {
  abrirCadastro: PropTypes.bool.isRequired,
};

export default Cadastro;
