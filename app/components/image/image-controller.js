//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let ims = new ImageService

function drawImage (singleImg) {
    document.body.style.backgroundImage = `
    url('${singleImg.urls.full}')
    `
}

export default class ImageController {

    constructor() {
        ims.getImage()
    }

    loadImage() {
        ims.getImage(call => {
            console.log('here')
            drawImage(call)
        })
    }

}