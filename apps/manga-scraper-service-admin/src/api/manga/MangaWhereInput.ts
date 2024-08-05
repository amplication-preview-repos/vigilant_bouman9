import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MangaWhereInput = {
  id?: StringFilter;
  releaseYear?: IntNullableFilter;
  summary?: StringNullableFilter;
  title?: StringNullableFilter;
};
