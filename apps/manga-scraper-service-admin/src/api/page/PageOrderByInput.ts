import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  chapterId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  pageNumber?: SortOrder;
  updatedAt?: SortOrder;
};
