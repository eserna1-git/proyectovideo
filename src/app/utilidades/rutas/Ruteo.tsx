import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/inicio";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
};
