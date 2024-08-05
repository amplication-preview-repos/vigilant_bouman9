import { PageUpdateManyWithoutChaptersInput } from "./PageUpdateManyWithoutChaptersInput";

export type ChapterUpdateInput = {
  chapterNumber?: number | null;
  pages?: PageUpdateManyWithoutChaptersInput;
  title?: string | null;
};
