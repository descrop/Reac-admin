// in src/App,js
import React from 'react';
import {Filter, Responsive, SimpleList, Create, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton, EmailField} from 'react-admin';
import MyUrlField from '../MyUrlField';
const Medname = ({ record }) => {
   return <span>Medico {record ? `${record.name}` : ''}</span>;
};
const MedFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const MedList = props => (
    <List filters={<MedFilter />} {...props}>
          <Responsive
              small={
                  <SimpleList
                      primaryText={record => `Medico: ${record.name} `}
                      secondaryText={record => `Ocupacion: ${record.Title} `}
                      tertiaryText={record => `Edad: ${record.Edad} `}
                  />
              }
              medium={
                  <Datagrid>
                  <EditButton />
                  <TextField label="Nombre Medico" source="name" />
                  <EmailField label="Correo" source="email" />
                  <TextField label="Telefono" source="phone" />
                 <TextField label="Ocupacin" source="Title" />
                 <TextField label="Edad" source="Edad" />
                  </Datagrid>
              }
          />
      </List>
);
export const MedEdit = props => (
  <Edit title={<Medname />} {...props}>
        <SimpleForm>
          <DisabledInput label="Registro" source="id" />
          <TextInput label="Nombre Medico" source="name" />
          <TextInput label="Correo" source="email" />
          <TextInput label="Telefono" source="phone" />
         <TextInput label="Ocupacin" source="Title" />
         <TextInput label="Edad" source="Edad" />
        </SimpleForm>
    </Edit>
);
export const MedCreate = props => (
  <Create {...props}>
        <SimpleForm>
            <TextInput label="Nombre Medico" source="name" />
            <TextInput label="Correo" source="email" />
            <TextInput label="Telefono" source="phone" />
           <TextInput label="Ocupacin" source="Title" />
           <TextInput label="Edad" source="Edad" />
        </SimpleForm>
    </Create>
);
