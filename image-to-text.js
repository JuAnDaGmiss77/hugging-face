import { HfInference } from "@huggingface/inference"
import { config } from "dotenv"

config()

const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

const imageUrl = 'https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg'

const imageResponse = await fetch(imageUrl)
const imageBlob = await imageResponse.blob()

const model = 'Salesforce/blip-image-captioning-large'
const result = await hf.imageToText({
    data: imageBlob,
    model: model
})

console.log(result)