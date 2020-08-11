import React from 'react';
import {EmailField, Responsive, SimpleList, Filter, Create,  SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
const CommentsTitle = ({ record }) => {
    return <span>Comments {record ? `${record.title}` : ''}</span>;
};
const CommentsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const CommentsList = props => (
  <List filters={<CommentsFilter />} {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.postId}
                    secondaryText={record => `Name: ${record.name} `}
                    tertiaryText={record => `${record.body} `}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="Post" source="postId" reference="posts">
                        <TextField source="title" />
                    </ReferenceField>
                    <TextField label="Comentario" source="name" />
                    <EmailField source="email" />
                    <TextField label="mensaje" source="body" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const CommentsEdit = props => (
  <Edit title={<CommentsTitle />} {...props}>
        <SimpleForm>
          <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput label="Comentario" source="name" />
           <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const CommentsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);
