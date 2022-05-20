import fs from 'fs';
import { parse } from 'csv-parse';
import CategoriesRepository from "../../repositories/CategoriesRepository";
import ImportCategory from './ImportCategory';

export default class ImportCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    async execute(file: Express.Multer.File) {
        const categories = await this.loadCategories(file);
        for (const category of categories) {
            const { name, description } = category;
            const categoryAlreadyExists = this.categoriesRepository.findByName(name);
            if (categoryAlreadyExists) continue;
            this.categoriesRepository.create({ name, description });
        };
    }
    
    private async loadCategories(file: Express.Multer.File): Promise<ImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const parseFile = parse();
            stream.pipe(parseFile);
            const categories: ImportCategory[] = [];
            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories)
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }
}