
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Home from "../containers/home/Home";
import Login from "../containers/login/Login";
import Layout  from "../component/layout/Layout";
import TablaAtleta from "../containers/tablas/tablaAtletas/TablaAtleta";
import TablaCompetencia from './../containers/tablas/tablaCompetencias/TablaCompetencia';
import Nueva from './../containers/tablas/Nueva'  //Tabla de Inscripciones
import { ButtonVisibilityProvider } from '../hooks/ButtonVisibilityContext'; // Asegúrate de ajustar la ruta según tu estructura de archivos

const App = () =>(
    <BrowserRouter >
    <ButtonVisibilityProvider>
    <Layout>
    <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>} />
    <Route path="/TablaAtleta" element={<TablaAtleta/>} />
    <Route path="/TablaCompetencia" element={<TablaCompetencia/>}/>
    <Route path="/Nueva" element={<Nueva/>}/>
    </Routes>
    </Layout>
    </ButtonVisibilityProvider>
    </BrowserRouter>
); 

export default App ; 