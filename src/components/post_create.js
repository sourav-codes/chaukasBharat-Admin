import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from "react-admin";

export const PostList = (props) => (
    <List {...props}>
    <SimpleForm>
    <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
    </SimpleForm>
</List>   
);

export const PostEdit = (props) => (
    <Edit {...props}>
    <SimpleForm>
    <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
    </SimpleForm>
</Edit>   
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
