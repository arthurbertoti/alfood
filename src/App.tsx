import { Routes, Route } from 'react-router-dom';
import AdministracaoRestaurantes from './paginas/Administracao/Restaurantes/AdministracaoRestaurantes';
import FormularioRestaurantes from './paginas/Administracao/Restaurantes/FormularioRestaurantes';
import PaginaBaseAdmin from './paginas/Administracao/PaginaBaseAdmin';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoPratos from './paginas/Administracao/Pratos/AdministracaoPratos';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path="/admin" element={<PaginaBaseAdmin />}>

        <Route path="restaurantes" element={<AdministracaoRestaurantes />} />
        <Route path="restaurantes/novo" element={<FormularioRestaurantes />} />
        <Route path="restaurantes/:id" element={<FormularioRestaurantes />} />

        <Route path="pratos" element={<AdministracaoPratos />} />

      </Route>

    </Routes>
  );
}

export default App;
