// in src/App,js
import React from 'react';
import {Filter, Responsive, SimpleList, Create, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton, EmailField} from 'react-admin';
import MyUrlField from '../MyUrlField';
const Mediname = ({ record }) => {
   return <span>Medicamento {record ? `${record.medicamento}` : ''}</span>;
};
const MediFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const MediList = props => (
    <List filters={<MediFilter />} {...props}>
          <Responsive
              small={
                  <SimpleList
                      primaryText={record => `Medicamento: ${record.medicamento} `}
                      secondaryText={record => `Caducidad: ${record.date} `}
                      tertiaryText={record => `Descripcion: ${record.body} `}
                  />
              }
              medium={
                  <Datagrid>
                  <EditButton />
                  <TextField label="Medicamento" source="medicamento" />
                  <TextField label="Caducidad" source="date" />
                  <TextField label="Descripcion" source="body" />
                 <TextField label="Cantidad" source="cantidad" />
                  </Datagrid>
              }
          />
      </List>
);
export const MediEdit = props => (
  <Edit title={<Mediname />} {...props}>
        <SimpleForm>
          <DisabledInput label="Registro" source="id" />
          <TextInput label="Medicamento" source="medicamento" />
          <TextInput label="Caducidad" source="date" />
          <LongTextInput label="Descripcion" source="body" />
         <TextInput label="Cantidad" source="cantidad" />
        </SimpleForm>
    </Edit>
);
export const MediCreate = props => (
  <Create {...props}>
        <SimpleForm>
            <TextInput label="Medicamento" source="medicamento" />
            <TextInput label="Caducidad" source="date" />
            <LongTextInput label="Descripcion" source="body" />
           <TextInput label="Cantidad" source="cantidad" />
        </SimpleForm>
    </Create>
);
