export class Todo {
  public id: string;
  public created: Date;
  public description: string;
  public done: boolean;

  constructor(id?: string, created?: Date, description?: string, done?: boolean) {
    this.id = id;
    this.created = created;
    this.description = description;
    this.done = done;
  }
}
