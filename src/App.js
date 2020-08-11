// in src/App,js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import {MedList, MedEdit, MedCreate} from './pages/medico';
import {CommentsList, RegistroEdit, RegistroCreate} from './pages/pacientes';
import { RecList, RecEdit, RecCreate } from './pages/recetas';
import { HabiList, HabiEdit, HabiCreate } from './pages/habitaciones';
import { MediList, MediEdit, MediCreate } from './pages/medicamentos';
import { InternoList, InternoEdit, InternoCreate } from './pages/internos';
import jsonServerProvider from 'ra-data-json-server';
import HabiIcon from '@material-ui/icons/AddLocation';
import InterIcon from '@material-ui/icons/Hotel';
import PaciIcon from '@material-ui/icons/PersonPin';
import DashIcon from '@material-ui/icons/History';
import UserIcon from '@material-ui/icons/CreateNewFolder';
import PostIcon from '@material-ui/icons/Book';
import MediIcon from '@material-ui/icons/Poll';
import Dashboard from './pages/Dashboard';
import authProvider from './auth/authProvider';
import { createMuiTheme } from '@material-ui/core/styles';

/*const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});*/

const dataProvider = jsonServerProvider('http://localhost:3000');
const App = () => (
  <Admin  dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} icon={DashIcon} >
   <Resource name="Recetas" list={RecList} edit={RecEdit} create={RecCreate} icon={PostIcon} />
   <Resource name="pacientes" list={CommentsList} edit={RegistroEdit} create={RegistroCreate} icon={PaciIcon} />
  <Resource name="medicos" list={MedList} edit={MedEdit} create={MedCreate} icon={UserIcon} />
  <Resource name="habitaciones" list={HabiList} edit={HabiEdit} create={HabiCreate} icon={HabiIcon} />
  <Resource name="medicamentos" list={MediList} edit={MediEdit} create={MediCreate} icon={MediIcon} />
  <Resource name="internos" list={InternoList} edit={InternoEdit} create={InternoCreate} icon={InterIcon} />
  </Admin>

);

export default App;
