//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service"

let ims = new ImageService

function drawImage (singleImg) {
    document.body.style.backgroundImage += `
    background-image: ${img.data};
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    `
    return drawImage;
}

export default class ImageController {

    constructor() {
        
    }

    loadImage(id) {
        ims.newImage(drawImage)
    }

}

