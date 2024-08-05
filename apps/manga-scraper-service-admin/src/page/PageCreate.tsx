import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ChapterTitle } from "../chapter/ChapterTitle";

export const PageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="chapter.id" reference="Chapter" label="chapter">
          <SelectInput optionText={ChapterTitle} />
        </ReferenceInput>
        <TextInput label="imageUrl" source="imageUrl" />
        <NumberInput step={1} label="pageNumber" source="pageNumber" />
      </SimpleForm>
    </Create>
  );
};
