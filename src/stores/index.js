import Authentication from './authentication';

export class RootStore {
	// constructor() {
	// }

	authentication = new Authentication(this);
}
