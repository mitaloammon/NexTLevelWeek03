import Image from '../models/Image';
import image from '../models/Image';

export default {
    render(image: image) {
        return {
            id: image.id, 
            url: `http:///10.0.0.9:3333/uploads/${image.path}`,
        };
    },

    renderMany(images: image[]) {
        return images.map(image => this.render(image));
    }
};