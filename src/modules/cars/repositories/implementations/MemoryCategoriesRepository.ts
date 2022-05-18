import CreateCategoryDTO from "../../dtos/CreateCategoryDTO";
import Category from "../../model/Category";
import CategoriesRepository from "../CategoriesRepository";

export default class MemoryCategoriesRepository implements CategoriesRepository {
  private categories: Category[];
  private static instance: MemoryCategoriesRepository;

  static getInstance(): MemoryCategoriesRepository {
    if(!MemoryCategoriesRepository.instance) MemoryCategoriesRepository.instance = new MemoryCategoriesRepository();
    return MemoryCategoriesRepository.instance;
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
 
  private constructor() {
    this.categories = [];
  }
}
