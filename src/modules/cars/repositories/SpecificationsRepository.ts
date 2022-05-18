import CreateSpecificationDTO from "../dtos/CreateSpecificationDTO";
import Specification from "../model/Specification";

export default interface SpecificationsRepository {
  create({ name, description }: CreateSpecificationDTO): void;
  findByName(name: string): Specification;
}
