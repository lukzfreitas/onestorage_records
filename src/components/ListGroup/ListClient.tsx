import { useEffect, useState } from "react";

// @ts-ignore
import { apiCompany } from "@tecno/api";
// @ts-ignore
import { Table } from "@tecno/styleguide";

const ListClient = () => {
  useEffect(() => {
    document.title = "Lista de clientes";
    fetchData();
  }, []);

  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    document.title = "Lista de clientes";
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: any = await apiCompany(
      "GET",
      "search/codigoIbgeUf%3D32",
      null
    );
    const list = response.data.map((item: any) => ({
      key: item.id,
      columns: [item.razaoSocial, item.nomeFantasia, item.cnpj],
    }));
    setClientList(list);
  };

  return (
    <Table
      header={["Razão Social", "Nome Fantasia", "CNPJ"]}
      rows={clientList}
      title={"Lista de clientes"}
    />
  );
};

export default ListClient;
