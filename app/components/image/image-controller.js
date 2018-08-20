//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service"

let ims = new ImageService

function drawImage (singleImage) {
    document.body.style.backgroundImage += `
    url('${singleImage.large_url}')
    `
    return drawImage;
}

export default class ImageController {

    constructor() {
        ims.newImage
    }

    loadImage(id) {
        ims.newImage(drawImage)
    }

}

