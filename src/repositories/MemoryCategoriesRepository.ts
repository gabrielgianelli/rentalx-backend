import CreateCategoryDTO from "../dtos/CreateCategoryDTO";
import Category from "../model/Category";

export default class CategoriesRepository implements CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: CreateCategoryDTO): void {
    const category = new Category(name, description, new Date());
    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories.slice();
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}
