import { SortOrder } from "../../util/SortOrder";

export type AuthorOrderByInput = {
  biography?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
