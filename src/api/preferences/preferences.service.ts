import { FirebaseDatabaseProvider } from 'firebase/db';
import { PreferencesServiceApi } from './preferences.contract';
import { Preferences } from './preferences.type';

class PreferencesService implements PreferencesServiceApi {
	private dbProvider = new FirebaseDatabaseProvider();

	getPreferences = async (userID: string): Promise<Preferences | undefined> =>
		this.dbProvider.preferences.getPreferences(userID);

	updatePreferences = async (
		preferences: Preferences,
		userID: string
	): Promise<Preferences> =>
		this.dbProvider.preferences.updatePreferences(userID, preferences);
}

export const preferencesService = new PreferencesService();
