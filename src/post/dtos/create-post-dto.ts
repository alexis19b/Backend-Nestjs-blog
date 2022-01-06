import { IsArray, IsBoolean, IsEnum, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { PostCategory } from "../enums";

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;

  @IsEnum(PostCategory, {
    message: `Opcion invalida, Las opciones correctas son ${EnumToString(PostCategory)}`
  })
  category: PostCategory;

  @IsArray()
  @IsString({ each: true }) //valida que cada uno sea una array de string
  tags: string[];

  @IsBoolean()
  status: boolean;

}