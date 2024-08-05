import { PageCreateNestedManyWithoutChaptersInput } from "./PageCreateNestedManyWithoutChaptersInput";

export type ChapterCreateInput = {
  chapterNumber?: number | null;
  pages?: PageCreateNestedManyWithoutChaptersInput;
  title?: string | null;
};
