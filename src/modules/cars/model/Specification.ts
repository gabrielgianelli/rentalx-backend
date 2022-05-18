import { v4 as uuidv4 } from "uuid";

export default class Specification {
  readonly id?: string;

  constructor(
    readonly name: string,
    readonly description: string,
    private _created_at: Date
  ) {
    if (!this.id) this.id = uuidv4();
  }

  get created_at(){
    return new Date(this._created_at);
  }
}
