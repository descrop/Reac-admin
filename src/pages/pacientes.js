import React from 'react';
import {EmailField, Responsive, SimpleList, Filter, Create,  SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/core/Avatar';
import {SelectField, ImageInput, DateInput, ImageField, DateField} from "react-admin";
const RegistroTitle = ({ record }) => {
    return <span>Paciente Interno {record ? `"${record.name}"` : ''}</span>;
};
const cardStyle = {
    width: 300,
    minHeight: 380,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: '#22e5a8',
    color: 'black',
};
const news = {
    borderradius: 80

};


const CommentGrid = ({ ids, data, basePath, object }) => (
    <div style={{ margin: '1em' }}>
    {ids.map(id =>
        <Card key={id} style={cardStyle}>
            <CardHeader
                avatar={<ImageField style={news} record={data[id]} source="pictures.src" url="src" />}
            />
            <CardContent>
            Nombre
            <TextField label="Nombre" record={data[id]} source="Name"  />
    Fecha de Registro
          <TextField label="Fecha" record={data[id]} source="Date"  />
            Sexo&nbsp;
                  <TextField record={data[id]} source="Sexo" />
                  Edad&nbsp;
                        <TextField record={data[id]} source="Edad" />
              </CardContent>
              <CardContent>
                  Asunto por el cual acudio a consulta.&nbsp;
                        <TextField record={data[id]} source="Asunto" />
              </CardContent>
            <CardActions style={{ textAlign: 'right' }}>
                <EditButton resource="posts" basePath={basePath} record={data[id]} />
            </CardActions>
        </Card>
    )}
    </div>
);
CommentGrid.defaultProps = {
    data: {},
    ids: [],
};

export const CommentsList = (props) => (
    <List title="Registro General de Pacientes" {...props}>
        <CommentGrid />
    </List>
);

export const RegistroEdit = props => (
  <Edit title={<RegistroTitle />} {...props}>
        <SimpleForm>
        <ImageInput source="pictures" label="Related pictures" accept="image/*">
          <ImageField source="src" title="title" />
          </ImageInput>
          <DisabledInput label="Registro" source="id" />
          <TextInput label="Paciente" source="name" />
          <TextInput source="Edad" />
            <TextInput source="Sexo" />
         <TextInput label="Consulta" source="Asunto" />
         <DateInput Label="Fecha de consulta" source="Date" />
        </SimpleForm>
    </Edit>
);
export const RegistroCreate = props => (
  <Create {...props}>
        <SimpleForm>
        <ImageInput source="pictures" label="Related pictures" accept="image/*">
          <ImageField source="src" title="title" />
          </ImageInput>
            <TextInput label="Paciente" source="name" />
            <TextInput source="Edad" />
          <TextInput source="Sexo" />
          <TextInput label="Consulta" source="Asunto" />
           <DateInput Label="Fecha de consulta" source="Date" />
        </SimpleForm>
    </Create>
);
