/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MangaWhereInput } from "./MangaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MangaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MangaWhereInput,
  })
  @ValidateNested()
  @Type(() => MangaWhereInput)
  @IsOptional()
  @Field(() => MangaWhereInput, {
    nullable: true,
  })
  every?: MangaWhereInput;

  @ApiProperty({
    required: false,
    type: () => MangaWhereInput,
  })
  @ValidateNested()
  @Type(() => MangaWhereInput)
  @IsOptional()
  @Field(() => MangaWhereInput, {
    nullable: true,
  })
  some?: MangaWhereInput;

  @ApiProperty({
    required: false,
    type: () => MangaWhereInput,
  })
  @ValidateNested()
  @Type(() => MangaWhereInput)
  @IsOptional()
  @Field(() => MangaWhereInput, {
    nullable: true,
  })
  none?: MangaWhereInput;
}
export { MangaListRelationFilter as MangaListRelationFilter };