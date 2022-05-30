export enum ModelType {
  MLP = "MLP", CNN = "CNN"
}

export function modelTypeFrom(value: string): ModelType {
  switch (value.toUpperCase()) {
    case ModelType.MLP:
      return ModelType.MLP;
    case ModelType.CNN:
      return ModelType.CNN;
    default:
      throw new Error(`Unsupported architecture: ${value}`);
  }
}
