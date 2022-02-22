import { TestSet } from "@/interfaces/test-set.interface";
import { TestItem } from "@/interfaces/test-item.interface";
import { TemplateItem } from "@/interfaces/template-item.interface";
import { Bucket } from "@/interfaces/bucket.interface";
import { Alert } from "@/interfaces/alert.interface";

export interface State {
  testSets: TestSet[];
  currentTestSet: TestSet;
  testItems: TestItem[];
  currentTestItem: TestItem;
  currentSentenceTemplate: TemplateItem[];
  buckets: Bucket[];
  currentBucket: Bucket;
  generatedSentences: { source: string }[];
  alert: Alert;
}
