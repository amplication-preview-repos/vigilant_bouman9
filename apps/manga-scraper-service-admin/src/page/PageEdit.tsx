import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ChapterTitle } from "../chapter/ChapterTitle";

export const PageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="chapter.id" reference="Chapter" label="chapter">
          <SelectInput optionText={ChapterTitle} />
        </ReferenceInput>
        <TextInput label="imageUrl" source="imageUrl" />
        <NumberInput step={1} label="pageNumber" source="pageNumber" />
      </SimpleForm>
    </Edit>
  );
};
