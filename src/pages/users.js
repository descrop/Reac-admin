// in src/App,js
import React from 'react';
import {Filter, Responsive, SimpleList, Create, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton, EmailField} from 'react-admin';
import MyUrlField from '../MyUrlField';
const Username = ({ record }) => {
   return <span>Nombre {record ? `${record.name}` : ''}</span>;
};
const UserFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const UserList = props => (
    <List filters={<UserFilter />} {...props}>
          <Responsive
              small={
                  <SimpleList
                      primaryText={record => `Usuario: ${record.name} `}
                      secondaryText={record => `Correo: ${record.email} `}
                      tertiaryText={record => `Compañia: ${record.company.name} `}
                  />
              }
              medium={
                  <Datagrid>
                  <EditButton />
                      <TextField source="id" />
                      <TextField label="Nombre" source="name" />
                      <EmailField label="Correo" source="email" />
                      <TextField label="Telefono" source="phone" />
                      <MyUrlField label="Sitio Web" source="website" />
                      <TextField label="Compañia" source="company.name" />
                  </Datagrid>
              }
          />
      </List>
);
export const UserEdit = props => (
  <Edit title={<Username />} {...props}>
        <SimpleForm>
          <DisabledInput source="id" />
              <TextInput label="Nombre" source="name" />
                 <TextInput label="Nombre de Ussuario" source="username" />
            <TextInput label="Correo" source="email" />
            <TextInput label="Telefono" source="phone" />
        </SimpleForm>
    </Edit>
);
export const UserCreate = props => (
  <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
           <TextInput source="website" />
           <TextInput source="company.name" />
        </SimpleForm>
    </Create>
);
