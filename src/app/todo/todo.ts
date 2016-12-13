export class Todo{
  public title: string;
  public description: string;
  public createdOn: Date;
  public id?: any;
  constructor(title: string, description: string, createdOn: Date, id?: any) {
    this.title = title;
    this.description = description;
    this.createdOn = createdOn;
    this.id = id;
  }

}
