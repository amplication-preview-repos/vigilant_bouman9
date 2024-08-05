/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Genre as PrismaGenre } from "@prisma/client";

export class GenreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GenreCountArgs, "select">): Promise<number> {
    return this.prisma.genre.count(args);
  }

  async genres(args: Prisma.GenreFindManyArgs): Promise<PrismaGenre[]> {
    return this.prisma.genre.findMany(args);
  }
  async genre(args: Prisma.GenreFindUniqueArgs): Promise<PrismaGenre | null> {
    return this.prisma.genre.findUnique(args);
  }
  async createGenre(args: Prisma.GenreCreateArgs): Promise<PrismaGenre> {
    return this.prisma.genre.create(args);
  }
  async updateGenre(args: Prisma.GenreUpdateArgs): Promise<PrismaGenre> {
    return this.prisma.genre.update(args);
  }
  async deleteGenre(args: Prisma.GenreDeleteArgs): Promise<PrismaGenre> {
    return this.prisma.genre.delete(args);
  }
}
