import { Chapter } from "../chapter/Chapter";

export type Page = {
  chapter?: Chapter | null;
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  pageNumber: number | null;
  updatedAt: Date;
};
