import { Preferences } from 'api/preferences/preferences.type';
import { db } from '../admin';

const ROOT_COLLECTION = 'user-preferences';

export class PreferencesDal {
	private admin = db;

	async setPreferences(userID: UUID, preferences: Preferences) {
		return this.admin
			.collection(ROOT_COLLECTION)
			.doc(userID)
			.set(preferences)
			.then(() => preferences);
	}

	async updatePreferences(userID: UUID, preferences: Preferences) {
		return this.admin
			.collection(ROOT_COLLECTION)
			.doc(userID)
			.update({ ...preferences })
			.then(() => preferences);
	}

	async getPreferences(userID: UUID): Promise<Preferences> {
		return this.admin
			.collection(ROOT_COLLECTION)
			.doc(userID)
			.get()
			.then(snapshot => {
				return snapshot.data() as Preferences;
			});
	}
}
