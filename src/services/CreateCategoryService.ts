import CreateCategoryServiceRequest from "../dtos/CreateCategoryServiceRequest";
import CategoriesRepository from "../repositories/CategoriesRepository";

export default class CreateCategoryService{
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: CreateCategoryServiceRequest) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) throw new Error("Category already exists!");
        this.categoriesRepository.create({ name, description })      
    }
}
