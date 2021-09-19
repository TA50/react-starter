import IConfig from "./IConfig";
import {
	config_DEVELOPMENT,
	config_STAGING,
	config_PRODCTION,
} from "../../appsettings";

class Config implements IConfig {
	private _configObj: any;
	constructor() {
		switch (process.env.REACT_APP_ENV?.toLowerCase()) {
			case "development":
				this._configObj = config_DEVELOPMENT;
				break;
			case "production":
				this._configObj = config_PRODCTION;
				break;
			case "staging":
				this._configObj = config_STAGING;
				break;
			default:
				throw new Error("you have to specify the env");
		}
	}
	Get(key: string) {
		const result = this._configObj[key];
		if (result) {
			return result;
		} else {
			throw new Error("Configuration not found");
		}
	}
}

export default Config;
