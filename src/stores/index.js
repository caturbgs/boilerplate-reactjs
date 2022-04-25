import Invoices from './invoices';

export class RootStore {
	// constructor() {
	// }

	invoices = new Invoices(this);
}
