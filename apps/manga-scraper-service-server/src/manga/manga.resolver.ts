import * as graphql from "@nestjs/graphql";
import { MangaResolverBase } from "./base/manga.resolver.base";
import { Manga } from "./base/Manga";
import { MangaService } from "./manga.service";

@graphql.Resolver(() => Manga)
export class MangaResolver extends MangaResolverBase {
  constructor(protected readonly service: MangaService) {
    super(service);
  }
}
