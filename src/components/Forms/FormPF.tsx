// @ts-ignore
import { Input, Select } from "@tecno/styleguide";

const FormPF = () => {
  return (
    <>
      <section className="row">
        <section className="col-sm">
          <Input
            key="idClient"
            label="RG"
            placeholder="Insira o RG"
            type="text"
          />
        </section>

        <section className="col-sm">
          <Input
            key="orgIdClient"
            label="Orgão do RG"
            placeholder="Insira o orgão do RG"
            type="text"
          />
        </section>
      </section>
      <section className="row">
        <section className="col-sm">
          <Input
            key="dateEmissionIdClient"
            label="Data de emissão do RG"
            placeholder="Insira a data de emissão do RG"
            type="date"
          />
        </section>

        <section className="col-sm">
          <Input
            key="birthDateClient"
            label="Data de nascimento"
            placeholder="Insira a data de nascimento"
            type="date"
          />
        </section>
      </section>
      <section className="row">
        <section className="col-sm">
          <Select
            key="genre"
            label="Sexo"
            options={[
              { label: "Masculino", value: "masculino", selected: false },
              { label: "Feminino", value: "feminino", selected: false },
            ]}
          />
        </section>

        <section className="col-sm">
          <Input
            key="race"
            label="Raça"
            placeholder="Insira a raça"
            type="text"
          />
        </section>
      </section>

      <section className="row">
        <section className="col-sm">
          <Input
            key="nationality"
            label="Nacionalidade"
            placeholder="Insira a nacionalidade"
          />
        </section>

        <section className="col-sm">
          <Input
            key="natural"
            label="Naturalidade"
            placeholder="Insira a naturalidade"
          />
        </section>
      </section>

      <section className="row">
        <section className="col-sm">
          <Input
            key="nameFather"
            label="Nome do pai"
            placeholder="Insira o nome do pai"
          />
        </section>

        <section className="col-sm">
          <Input
            key="nameMother"
            label="Nome da mãe"
            placeholder="Insira o nome da mãe"
          />
        </section>
      </section>
    </>
  );
};

export default FormPF;
