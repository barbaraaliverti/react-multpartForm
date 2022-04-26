import React from "react";
import DadosEntrega from "../DadosEntrega/DadosEntrega";
import DadosPessoais from "../DadosPessoais/DadosPessoais";
import DadosUsuario from "../DadosUsuario/DadosUsuario";

function FormularioCadastro ({aoEnviar, validarCPF}) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;
