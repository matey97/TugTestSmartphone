import { Classification, ClassificationResult } from "@awarns/ml-kit";

export class TimedClassification extends Classification {
  constructor(classificationResult: ClassificationResult, aim: string, public executionTime: number) {
    super(classificationResult, aim);
  }
}
