// in src/App,js
import React from 'react';
import {Responsive, SimpleList, Filter, Create,  SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
const RecTitle = ({ record }) => {
    return <span>Receta Generada para el Paciente {record ? `"${record.pacienteId}"` : ''}</span>;
};
const RecFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const RecList = props => (
  <List filters={<RecFilter />} {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record =>  ` Registro de Paciente: ${record.pacienteId} `}
                    secondaryText={record => ` Receta: ${record.body} `}
                    tertiaryText={record => ` Costo de Consulta: ${record.costo} `}
                />
            }
            medium={
                <Datagrid>
                <TextField label="Registro" source="id" />
                <ReferenceField label="Medico" source="medicoId" reference="medicos">
                    <TextField source="name" />
                </ReferenceField>
                <ReferenceField label="Paciente" source="pacienteId" reference="pacientes">
                    <TextField source="name" />
                </ReferenceField>
                <ReferenceField label="Asunto" source="pacienteId" reference="pacientes">
                    <TextField source="Asunto" />
                </ReferenceField>
                <TextField label="Receta" source="body" />
                <TextField label="Pago por Consulta"  source="costo" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const RecEdit = props => (
  <Edit title={<RecTitle />} {...props}>
        <SimpleForm>
          <DisabledInput label="Registros" source="id" />
          <ReferenceInput label="Medico" source="medicoId" reference="medicos">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <ReferenceInput label="Paciente" source="pacienteId" reference="pacientes">
             <SelectInput optionText="name" />
               </ReferenceInput>
               <ReferenceInput label="Asunto" source="pacienteId" reference="pacientes">
                  <SelectInput optionText="Asunto" />
                    </ReferenceInput>
          <LongTextInput label="Receta" source="body" />
          <TextInput label="Pago por consulta" source="costo" />
        </SimpleForm>
    </Edit>
);

export const RecCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Medico" source="medicoId" reference="medicos">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Paciente" source="pacienteId" reference="pacientes">
               <SelectInput optionText="name" />
                 </ReferenceInput>
                 <ReferenceInput label="Asunto" source="pacienteId" reference="pacientes">
                    <SelectInput optionText="Asunto" />
                      </ReferenceInput>
            <LongTextInput label="Receta" source="body" />
            <TextInput label="Pago por consulta" source="costo" />

        </SimpleForm>
    </Create>
);
