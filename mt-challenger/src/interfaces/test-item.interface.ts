export interface TestItem {
  id: number;
  source: string;
  target: {
    prefix: string;
    rule: string;
  };
}
