import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuthorWhereInput = {
  biography?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
