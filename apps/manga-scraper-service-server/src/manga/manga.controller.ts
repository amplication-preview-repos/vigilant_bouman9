import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MangaService } from "./manga.service";
import { MangaControllerBase } from "./base/manga.controller.base";

@swagger.ApiTags("manga")
@common.Controller("manga")
export class MangaController extends MangaControllerBase {
  constructor(protected readonly service: MangaService) {
    super(service);
  }
}
