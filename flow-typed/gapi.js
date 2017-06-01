declare var gapi: {
  auth: {
    authorize: ({'client_id': string, scope: string, immediate: boolean}) => Promise<any>
  },
  client: {
    drive: {
      files: {
        list: ({q: string}) => Promise<any>
      }
    },
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
