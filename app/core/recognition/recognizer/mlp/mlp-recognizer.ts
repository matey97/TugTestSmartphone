import { AbstractRecognizer} from "~/core/recognition/recognizer/abstract-recognizer";
import { ModelType, SensingDataSource } from "~/core/mode";
import { Samples } from "~/core/recognition/recognizer/samples";
import { extractFeaturesFrom } from "~/core/recognition/recognizer/mlp/features";
import ByteBuffer = java.nio.ByteBuffer;

export class MLPRecognizer extends AbstractRecognizer {

  constructor(dataSource: SensingDataSource) {
    super(dataSource, ModelType.MLP);
  }

  protected createInputBuffer(samples: Samples): java.nio.ByteBuffer {
    const extractedFeatures = extractFeaturesFrom(samples);
    const features = extractedFeatures.features;

    const input: ByteBuffer = this.createBuffer(features.length, java.lang.Float.SIZE);

    for (let feature of features) {
      input.putFloat(feature);
    }

    return input;
  }
}
