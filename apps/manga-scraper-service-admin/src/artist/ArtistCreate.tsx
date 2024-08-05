import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ArtistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="biography" multiline source="biography" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
