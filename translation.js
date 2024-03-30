import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";

config();

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);
const model = "facebook/mbart-large-50-many-to-many-mmt";
const textToTranslate = 'Hi my name is David'

const response = await hf.translation({
  model: model,
  inputs: textToTranslate,
  parameters: {
    src_lang: "en_XX",
    tgt_lang: "es_XX",
  },
});

console.log(response)
