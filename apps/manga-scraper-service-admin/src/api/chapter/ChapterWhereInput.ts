import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChapterWhereInput = {
  chapterNumber?: IntNullableFilter;
  id?: StringFilter;
  pages?: PageListRelationFilter;
  title?: StringNullableFilter;
};
