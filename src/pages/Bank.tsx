import { useState } from "react";
// @ts-ignore
import { Tab } from "@tecno/styleguide";

const Bank = () => {
  const Register = 0;
  const List = 1;
  const menuItens = [
    { key: Register, label: "Cadastro de bancos" },
    { key: List, label: "Lista de bancos" },
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
      {/* {menuSelected == List ? <ListClient list={listClient} /> : <FormClient />} */}
    </div>
  );
};

export default Bank;
