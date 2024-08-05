import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ArtistWhereInput = {
  biography?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
