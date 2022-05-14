import CreateCategoryDTO from "../dtos/CreateCategoryDTO";
import Category from "../model/Category";

export default interface CategoriesRepository {
  create({ name, description }: CreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}
