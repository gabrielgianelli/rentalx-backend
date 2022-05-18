import SpecificationsRepository from "../../repositories/SpecificationsRepository";
import CreateSpecificationServiceRequest from "./CreateSpecificationServiceRequest";

export default class CreateSpecificationUseCase {
    constructor(private specificationsRepository: SpecificationsRepository) {}
    
    execute({ name, description }: CreateSpecificationServiceRequest) {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) throw new Error("Specification already exists!");
        this.specificationsRepository.create({ name, description });
    }
}
