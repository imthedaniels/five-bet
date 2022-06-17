import { createContext, useState } from "react";

export const BuyCryptoContext = createContext([]);

export const BuyCryptoProvider = ({ children }) => {
  const [list, setList] = useState("BTC");

  const [teste, setTeste] = useState(0);
  const [open, setOpen] = useState(false);
  const [usd, setUsd] = useState(0);
  const [data, setData] = useState({});
  const [person, setPerson] = useState({});
  const [modalCompra, setModalCompra] = useState(false);

  const chooseTeste = (number) => {
    setTeste(number);
  };

  const chooseList = (lista) => {
    setList(lista);
  };

  return (
    <BuyCryptoContext.Provider
      value={{
        list,
        chooseList,
        chooseTeste,
        modalCompra,
        setModalCompra,
        teste,
        open,
        setOpen,
        usd,
        setUsd,
        data,
        setData,
        person,
        setPerson,
      }}
    >
      {children}
    </BuyCryptoContext.Provider>
  );
};
