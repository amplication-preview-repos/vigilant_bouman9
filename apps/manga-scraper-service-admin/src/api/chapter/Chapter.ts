import { Page } from "../page/Page";

export type Chapter = {
  chapterNumber: number | null;
  createdAt: Date;
  id: string;
  pages?: Array<Page>;
  title: string | null;
  updatedAt: Date;
};
