import { SortOrder } from "../../util/SortOrder";

export type MangaOrderByInput = {
  createdAt?: SortOrder;
  genres?: SortOrder;
  id?: SortOrder;
  releaseYear?: SortOrder;
  summary?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
