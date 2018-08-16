//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service"

let ims = new ImageService

function drawImage (singleImg) {
    let csTemplate = ''
    const img = singleImg[i];
    csTemplate += `
    background-image: ${img.data};
    `
    document.getElementsByName("body").style = csTemplate
    return drawImage;
}

export default class ImageController {

    constructor() {
        ims.init()
    }

    loadImage() {

    }

}

