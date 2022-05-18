import CreateSpecificationDTO from "../../dtos/CreateSpecificationDTO";
import Specification from "../../model/Specification";
import SpecificationsRepository from "../SpecificationsRepository";

export default class MemorySpecificationsRepository implements SpecificationsRepository {
  private specifications: Specification[];
  private static instance: MemorySpecificationsRepository;

  static getInstance(): MemorySpecificationsRepository {
    if(!MemorySpecificationsRepository.instance) MemorySpecificationsRepository.instance = new MemorySpecificationsRepository();
    return MemorySpecificationsRepository.instance;
  }
  
  create({ name, description }: CreateSpecificationDTO): void {
    const specification = new Specification(name, description, new Date());
    this.specifications.push(specification);
  }
  
  findByName(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name);
    return specification;
  }

  private constructor() {
    this.specifications = [];
  }
}
