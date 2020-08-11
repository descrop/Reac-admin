// in src/App,js
import React from 'react';
import {DisabledField, Responsive, SimpleList, Filter, Create,  SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
const HabiTitle = ({ record }) => {
    return <span>Habitacion {record ? `${record.Habitacion}-${record.Pizo}` : ''}</span>;
};
const HabiFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const HabiList = props => (
  <List filters={<HabiFilter />} {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => `Habitacion ${record.Habitacion}`}
                    secondaryText={record => `Pizo ${record.Pizo}`}
                    /*tertiaryText={record => new Date(record.published_at).toLocaleDateString()}*/
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Registro" source="id" />
                    <TextField source="Habitacion" />
                    <TextField source="Pizo" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const HabiEdit = props => (
  <Edit title={<HabiTitle />} {...props}>
        <SimpleForm>
          <DisabledInput label="Registro" source="id" />
          <DisabledInput source="Habitacion" />
          <DisabledInput source="Pizo" />
        </SimpleForm>
    </Edit>
);

export const HabiCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Habitacion" />
            <TextInput source="Pizo" />
        </SimpleForm>
    </Create>
);
