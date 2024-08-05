/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Page } from "./Page";
import { PageCountArgs } from "./PageCountArgs";
import { PageFindManyArgs } from "./PageFindManyArgs";
import { PageFindUniqueArgs } from "./PageFindUniqueArgs";
import { CreatePageArgs } from "./CreatePageArgs";
import { UpdatePageArgs } from "./UpdatePageArgs";
import { DeletePageArgs } from "./DeletePageArgs";
import { Chapter } from "../../chapter/base/Chapter";
import { PageService } from "../page.service";
@graphql.Resolver(() => Page)
export class PageResolverBase {
  constructor(protected readonly service: PageService) {}

  async _pagesMeta(
    @graphql.Args() args: PageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Page])
  async pages(@graphql.Args() args: PageFindManyArgs): Promise<Page[]> {
    return this.service.pages(args);
  }

  @graphql.Query(() => Page, { nullable: true })
  async page(@graphql.Args() args: PageFindUniqueArgs): Promise<Page | null> {
    const result = await this.service.page(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Page)
  async createPage(@graphql.Args() args: CreatePageArgs): Promise<Page> {
    return await this.service.createPage({
      ...args,
      data: {
        ...args.data,

        chapter: args.data.chapter
          ? {
              connect: args.data.chapter,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Page)
  async updatePage(@graphql.Args() args: UpdatePageArgs): Promise<Page | null> {
    try {
      return await this.service.updatePage({
        ...args,
        data: {
          ...args.data,

          chapter: args.data.chapter
            ? {
                connect: args.data.chapter,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Page)
  async deletePage(@graphql.Args() args: DeletePageArgs): Promise<Page | null> {
    try {
      return await this.service.deletePage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Chapter, {
    nullable: true,
    name: "chapter",
  })
  async getChapter(@graphql.Parent() parent: Page): Promise<Chapter | null> {
    const result = await this.service.getChapter(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
