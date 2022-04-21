export interface RecognitionResult {
  inference: InferenceProbability
  timestampStart: number,
  timestampEnd: number,
}

export interface InferenceProbability {
  class: string,
  probability: number
}
