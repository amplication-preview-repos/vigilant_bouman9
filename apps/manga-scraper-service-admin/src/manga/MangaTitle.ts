import { Manga as TManga } from "../api/manga/Manga";

export const MANGA_TITLE_FIELD = "title";

export const MangaTitle = (record: TManga): string => {
  return record.title?.toString() || String(record.id);
};
