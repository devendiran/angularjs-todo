export class Todo{
  public title: string;
  public description: string;
  public createdOn: Date;

  constructor(title: string, description: string, createdOn: Date) {
    this.title = title;
    this.description = description;
    this.createdOn = createdOn;
  }

}
