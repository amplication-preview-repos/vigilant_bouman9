import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";

export type PageCreateInput = {
  chapter?: ChapterWhereUniqueInput | null;
  imageUrl?: string | null;
  pageNumber?: number | null;
};
