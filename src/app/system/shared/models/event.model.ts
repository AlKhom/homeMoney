export class HAEvent {
  constructor(public type: String,
              public amount: number,
              public category: number,
              public date: string,
              public description: string,
              public id?: number) {
  }
}

