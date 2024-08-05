import { Module } from "@nestjs/common";
import { MangaModuleBase } from "./base/manga.module.base";
import { MangaService } from "./manga.service";
import { MangaController } from "./manga.controller";
import { MangaResolver } from "./manga.resolver";

@Module({
  imports: [MangaModuleBase],
  controllers: [MangaController],
  providers: [MangaService, MangaResolver],
  exports: [MangaService],
})
export class MangaModule {}
