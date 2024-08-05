import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";

export type PageUpdateInput = {
  chapter?: ChapterWhereUniqueInput | null;
  imageUrl?: string | null;
  pageNumber?: number | null;
};
