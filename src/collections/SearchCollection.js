import SearchModel from '../models/SearchModel';

export default class SeachCollection extends Array {
  constructor(res) {
    const models = res.results.map(m => new SearchModel(m));
    super(...models);
  }
}
