import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PageWhereInput = {
  chapter?: ChapterWhereUniqueInput;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  pageNumber?: IntNullableFilter;
};
