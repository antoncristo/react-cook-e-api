import { PreferencesDal, RecipeDal } from './dal';

export class FirebaseDatabaseProvider {
	recipes = new RecipeDal();
	preferences = new PreferencesDal();
}
