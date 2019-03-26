export interface ResultBean<T> {
  code: string;
  description: string;
  data: T;
}

export class Bot {
  // noinspection JSAnnotator
  constructor(
    public pid: number,
    public status: string,
    public createTime: string,
    public botClientId: string,
    public qrcodePath: string,
  ) {}
}

export class Friend {
  constructor(
    public name: string,
    public age: number,
    public city: string,
  ) {}
}
