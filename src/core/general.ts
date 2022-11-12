import { v4 as uuid } from 'uuid';

class General {
  public id: string;

  constructor() {
    this.id = uuid();
  }
}

export default General;
