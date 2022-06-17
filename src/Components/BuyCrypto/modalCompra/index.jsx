import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { BuyCryptoContext } from "../../../Providers/BuyCrypto";
import { api } from "../../../Services/api.jsx";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  color: "white",
};
const styleButton = {
  border: "0",
  bgcolor: "white",
};

//modal -- se a quantia de dolar, nao for suficiente para comprar naquela opção
export const ModalQuantiaInsuficiente = () => {
  const { open, setOpen, teste, usd, data, person } =
    useContext(BuyCryptoContext);
  function handleClose() {
    setOpen(false);
  }

  const tokenAUTH = JSON.parse(window.localStorage.getItem("@GambleAPI:token"));
  const PATCHaxios = (data) => {
    api
      .patch(`/users/${person.id}`, data, {
        headers: { Authorization: `Bearer ${tokenAUTH}` },
      })
      .then((res) => {})
      .catch((res) => console.log(res));
  };
  const MandarParaAPI = () => {
    const soma = Number(data.amount) + Number(person.balance);
    const newBalance = {
      balance: soma,
    };
    PATCHaxios(newBalance);
    toast.success("Transaction successfully done!", {
      theme: "colored",
    });
  };
  if (usd < teste) {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Buy {usd}
              {data.crypto}
            </Typography>
            <button
              id="modal-modal-description"
              sx={{ styleButton }}
              onClick={() => {
                MandarParaAPI();
                handleClose();
              }}
            >
              Buy crypto
            </button>
          </Box>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Your amount of money is more than the actual trade has.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
};
