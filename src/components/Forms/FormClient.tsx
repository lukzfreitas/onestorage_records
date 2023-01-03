import { useEffect, useState } from "react";
import FormPF from "./FormPF";
// @ts-ignore
import { apiCompany } from "@tecno/api";
// @ts-ignore
import { Input, Select, TextArea, Title, Button } from "@tecno/styleguide";

const FormClient = () => {
  useEffect(() => {
    document.title = "Cadastro de clientes";
  });

  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    document.title = "Lista de clientes";
    fetchDataCompany();
  }, []);

  const fetchDataCompany = async () => {
    const response: any = await apiCompany(
      "GET",
      "search/codigoIbgeUf%3D32",
      null
    );
    const list = response.data.map((item: any) => ({
      value: item.id,
      label: item.nomeFantasia,
      selected: false,
    }));
    setCompanyList(list);
  };

  const submit = (e: any) => {
    e.preventDefault();
  };

  const FieldsCommon = () => {
    return (
      <div className="row">
        <div className="col-sm">
          <Select label="Selecione a empresa" options={companyList} />
        </div>
        <div className="col-sm">
          <Input
            key="cpfCnpjClient"
            label="CPF/CNPJ"
            placeholder="Insira o CPF ou CNPJ"
            type="tel"
            pattern={"\(\d{2}\)\d{4}-\d{4}"}
          />
        </div>
      </div>
    );
  };

  const FieldsClient = () => {
    return (
      <>
        <div className="row">
          <div className="col-sm">
            <Select
              label="Tabela de preço"
              options={[
                { label: "Tabela 1", selected: true, value: "id1" },
                { label: "Tabela 2", selected: false, value: "id2" },
                { label: "Tabela 3", selected: false, value: "id3" },
              ]}
            />
          </div>
          <div className="col-sm">
            <Input key="sinceClient" label="Desde" type="date" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Input
              key="taxDiscountClient"
              label="Taxa de desconto"
              type="number"
            />
          </div>
          <div className="col-sm">
            <Input
              key="limitCreditClient"
              label="Limite de crédito"
              placeholder="Insira o limite de crédito"
              type="number"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <TextArea label="Observações" />
          </div>
        </div>
      </>
    );
  };

  const Actions = () => {
    return (
      <div className="col-sm">
        <div className="col-sm">
          <div className="form-group float-right">
            <Button type="reset" style="danger" title="Limpar formulário" />
            <Button type="submit" style="primary" title="Salvar" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row p-3">
      <div className="col-sm">
        <Title label="Cadastro de clientes" />
        <form onSubmit={submit}>
          <FieldsCommon />
          <FormPF />
          <FieldsClient />
          <Actions />
        </form>
      </div>
    </div>
  );
};

export default FormClient;
