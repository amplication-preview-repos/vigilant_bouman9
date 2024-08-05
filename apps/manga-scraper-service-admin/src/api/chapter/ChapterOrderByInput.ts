import { SortOrder } from "../../util/SortOrder";

export type ChapterOrderByInput = {
  chapterNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
