import React from 'react';
import {DateInput, Responsive, SimpleList, Filter, Create,  SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
const InternoTitle = ({ record }) => {
    return <span>Paciente Interno {record ? `"${record.pacienteId}"` : ''}</span>;
};
const InternoFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Paciente" source="PacienteId" reference="pacientes" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export const InternoList = props => (
  <List filters={<InternoFilter />} {...props}>
        <Responsive
            small={
                <SimpleList
                primaryText={record => `Paciente: ${record.PacienteId} `}
                secondaryText={record => `Ingreso: ${record.Date} `}
                /*tertiaryText={record => `company: ${record.company.name} `}*/
                />
            }
            medium={
                <Datagrid>
                <ReferenceField label="Habitacion" source="HabitacionId" reference="habitaciones">
                    <TextField source="Habitacion" />
                </ReferenceField>
                      <ReferenceField label="Nombre del Paciente" source="PacienteId" reference="pacientes">
                          <TextField source="name" />
                      </ReferenceField>
                      <ReferenceField label="Edad del Paciente" source="PacienteId" reference="pacientes">
                          <TextField source="Edad" />
                          </ReferenceField>
                          <ReferenceField label="Sexo" source="PacienteId" reference="pacientes">
                              <TextField source="Sexo" />
                              </ReferenceField>
                          <ReferenceField label="Motivo de Ingreso" source="PacienteId" reference="pacientes">
                              <TextField source="Asunto" />
                              </ReferenceField>
                                  <TextField label="Fecha de Ingreso" source="date" />
                                  <ReferenceField label="Medico responsable" source="medicoId" reference="medicos">
                                      <TextField source="name" />
                                      </ReferenceField>
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const InternoEdit = props => (
  <Edit title={<InternoTitle />} {...props}>
        <SimpleForm>
          <DisabledInput label="Registro" source="id" />
          <ReferenceInput label="Habitacion asignada" source="HabitacionId" reference="habitaciones">
              <SelectInput optionText="Habitacion" />
          </ReferenceInput>
          <ReferenceInput label="Paciente" source="PacienteId" reference="pacientes">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <ReferenceInput  label="Edad" source="PacienteId" reference="pacientes">
              <SelectInput optionText="Edad" />
          </ReferenceInput>
          <ReferenceInput label="Motivo de Ingreso" source="PacienteId" reference="pacientes">
              <SelectInput  optionText="Asunto" />
          </ReferenceInput>
          <DateInput label="Fecha de Ingreso" source="date" />
          <ReferenceInput label="Medico responsable" source="medicoId" reference="medicos">
              <SelectInput optionText="name" />
          </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const InternoCreate = props => (
    <Create {...props} >
        <SimpleForm>
        <ReferenceInput label="Habitacion asignada" source="HabitacionId" reference="habitaciones">
            <SelectInput optionText="Habitacion" />
        </ReferenceInput>
            <ReferenceInput source="PacienteId" reference="pacientes">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Edad" source="PacienteId" reference="pacientes">
                <SelectInput  optionText="Edad" />
            </ReferenceInput>
            <ReferenceInput label="Motivo de Ingreso" source="PacienteId" reference="pacientes">
                <SelectInput  optionText="Asunto" />
            </ReferenceInput>
            <DateInput label="Fecha de Ingreso" source="date" />
            <ReferenceInput label="Medico responsable" source="medicoId" reference="medicos">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
