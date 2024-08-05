/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Manga as PrismaManga } from "@prisma/client";

export class MangaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MangaCountArgs, "select">): Promise<number> {
    return this.prisma.manga.count(args);
  }

  async mangaItems(args: Prisma.MangaFindManyArgs): Promise<PrismaManga[]> {
    return this.prisma.manga.findMany(args);
  }
  async manga(args: Prisma.MangaFindUniqueArgs): Promise<PrismaManga | null> {
    return this.prisma.manga.findUnique(args);
  }
  async createManga(args: Prisma.MangaCreateArgs): Promise<PrismaManga> {
    return this.prisma.manga.create(args);
  }
  async updateManga(args: Prisma.MangaUpdateArgs): Promise<PrismaManga> {
    return this.prisma.manga.update(args);
  }
  async deleteManga(args: Prisma.MangaDeleteArgs): Promise<PrismaManga> {
    return this.prisma.manga.delete(args);
  }
}