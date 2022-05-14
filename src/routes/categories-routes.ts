import { Router } from "express";
import MemoryCategoriesRepository from "../repositories/MemoryCategoriesRepository";
import CreateCategoryService from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new MemoryCategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.list();
  return response.json(categories);
});

export { categoriesRoutes };
