export interface RecognitionResult {
  inference: InferenceProbability
  timestampStart: number,
  timestampEnd: number,
  recognitionTime: number,
}

export interface InferenceProbability {
  class: string,
  probability: number
}
