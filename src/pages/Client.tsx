import { useState } from "react";
import FormClient from "../components/Forms/FormClient";
import ListClient from "../components/ListGroup/ListClient";
// @ts-ignore
import { Tab } from "@tecno/styleguide";

const Client = () => {
  const Register = 0;
  const List = 1;
  const menuItens = [
    { key: Register, label: "Cadastro de clientes" },
    { key: List, label: "Lista de clientes" },
  ];

  const [menuSelected, setMenuSelected]: [number, Function] =
    useState(Register);

  return (
    <div style={{ height: "92vh", overflow: "hidden", overflowY: "scroll" }}>
      <Tab
        menuSelected={menuSelected}
        menuItens={menuItens}
        onSelectMenuItem={(key: number) => setMenuSelected(key)}
      />
      {menuSelected == List ? <ListClient /> : <FormClient />}
    </div>
  );
};

export default Client;
