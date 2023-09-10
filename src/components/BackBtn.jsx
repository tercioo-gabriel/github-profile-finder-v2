import React from "react";
import { useNavigate } from "react-router-dom";
import { Back } from "./styles";


export default function BackBtn() {
  const navigate = useNavigate();

  return (
      <Back onClick={() => navigate(-1)}>
        Voltar
      </Back>
  );
};