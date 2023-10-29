import { Preferences } from './preferences.type';

export interface PreferencesServiceApi {
	getPreferences: (userID: UUID) => Promise<Preferences | undefined>;
	updatePreferences: (preferences: Preferences, userID: UUID) => Promise<Preferences>;
}
