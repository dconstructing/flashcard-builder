declare type GoogleAuth = {
	isSignedIn: {
		get: () => boolean,
		listen: ((boolean) => void) => void
	},
	signIn: () => Promise<any>,
	signOut: () => Promise<any>
}

declare var gapi: {
	auth: {
		authorize: ({'client_id': string, scope: string, immediate: boolean}) => Promise<any>
	},
	auth2: {
		getAuthInstance: () => GoogleAuth,
		init: ({clientId: string, scope: string}) => Promise<any>
	},
	client: {
		drive: {
			files: {
				list: ({q: string}) => Promise<any>
			}
		},
		init: ({clientId: string, scope: string}) => Promise<any>,
		load: (a: string, b?: string) => Promise<any>,
		sheets: {
			spreadsheets: {
				get: ({spreadsheetId: string}) => Promise<any>,
				values: {
					get: ({spreadsheetId: string, range: string}) => Promise<any>
				}
			}
		}
	},
	load: (a: string, () => void) => void
};
