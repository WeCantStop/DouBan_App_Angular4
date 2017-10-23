export interface DataType {
  status: number;
  code: number;
  data: Data[];
  message: string;
}

export interface Data {
  number: string;
  age: number;
}

