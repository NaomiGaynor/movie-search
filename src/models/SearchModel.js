import { IMAGE_BASE_PATH } from '../constants';

export default class SeachModel {
  constructor(model) {
    Object.assign(this, model);
    this.image_path = `${IMAGE_BASE_PATH}${model.poster_path}`;
  }
}
