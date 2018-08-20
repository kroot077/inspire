const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/random'
const apiUrl = url + encodeURIComponent(url2);


// @ts-ignore
const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImage(callWhenDone) {
		// ^^^^^^^ How do you call this function?
		imgApi().then(res => {
			console.log('Image Data:', res.data),
			callWhenDone(res.data)
		})
		.catch(err => console.log(err)) 
	}
}