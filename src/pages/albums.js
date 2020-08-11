import React from 'react';
import {Responsive, SimpleList, Filter, Create,  SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
const AlbumsTitle = ({ record }) => {
    return <span>Albums {record ? `"${record.title}"` : ''}</span>;
};
const AlbumsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const AlbumsList = props => (
  <List filters={<AlbumsFilter />} {...props}>
        <Responsive
            small={
                <SimpleList
                primaryText={record => `Usuario: ${record.userId} `}
                secondaryText={record => `Titulo: ${record.title} `}
                /*tertiaryText={record => `company: ${record.company.name} `}*/
                />
            }
            medium={
                <Datagrid>
                      <TextField source="id" />
                      <ReferenceField label="Usuario" source="userId" reference="users">
                          <TextField source="name" />
                      </ReferenceField>
                    <TextField source="title" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const AlbumsEdit = props => (
  <Edit title={<AlbumsTitle />} {...props}>
        <SimpleForm>
          <DisabledInput source="id" />
          <ReferenceInput label="Usuario" source="userId" reference="users">
             <SelectInput optionText="name" />
          </ReferenceInput>
           <LongTextInput source="title" />
        </SimpleForm>
    </Edit>
);

export const AlbumsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <LongTextInput source="title" />
        </SimpleForm>
    </Create>
);
