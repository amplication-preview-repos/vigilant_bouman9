import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const MangaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="genres"
          source="genres"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="releaseYear" source="releaseYear" />
        <TextInput label="summary" multiline source="summary" />
        <SelectArrayInput
          label="tags"
          source="tags"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
