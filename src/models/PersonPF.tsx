class PersonPF {
  id: string;
  empresaId: string;
  clienteId: string;
  colaboradorId: string;
  contadorId: string;
  fornecedorId: string;
  pessoaFisicaId: string;
  pessoaJuridicaId: string;
  transportadoraId: string;
  nome: string;
  tipo: string;
  site: string;
  email: string;
  ehCliente: string;
  ehFornecedor: string;
  ehTransportadora: string;
  ehColaborador: string;
  ehContador: string;

  constructor({
    id,
    empresaId,
    clienteId,
    colaboradorId,
    contadorId,
    fornecedorId,
    pessoaFisicaId,
    pessoaJuridicaId,
    transportadoraId,
    nome,
    tipo,
    site,
    email,
    ehCliente,
    ehFornecedor,
    ehTransportadora,
    ehColaborador,
    ehContador,
  }) {
    this.id = id;
    this.empresaId = empresaId;
    this.clienteId = clienteId;
    this.colaboradorId = colaboradorId;
    this.contadorId = contadorId;
    this.fornecedorId = fornecedorId;
    this.pessoaFisicaId = pessoaFisicaId;
    this.pessoaJuridicaId = pessoaJuridicaId;
    this.transportadoraId = transportadoraId;
    this.nome = nome;
    this.tipo = tipo;
    this.site = site;
    this.email = email;
    this.ehCliente = ehCliente;
    this.ehFornecedor = ehFornecedor;
    this.ehTransportadora = ehTransportadora;
    this.ehColaborador = ehColaborador;
    this.ehContador = ehContador;
  }

  static serialize(obj: PersonPF) {
    return JSON.stringify(obj);
  }

  static deserialize(json: any) {
    return new PersonPF(json);
  }
}
