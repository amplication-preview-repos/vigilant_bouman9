import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GenreWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
