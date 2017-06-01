// @flow
declare type GoogleClient = {
  listSpreadsheets: () => Promise<any>,
  loadFileData: (fileId: string) => Promise<any>,
};

const CLIENT_ID = '594524984428-ri54vus01s2c57iqp2i8cmr5l67n9g2s.apps.googleusercontent.com';
const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets.readonly',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
];

const checkAuth = (): Promise<any> => {
  console.log('checking Google Auth');
  return gapi.auth.authorize({
    'client_id': CLIENT_ID,
    'scope': SCOPES.join(' '),
    'immediate': true
  });
};

const loadFiles = (): Promise<any> => {
  console.log('loading files');
  return gapi.client.drive.files.list({
    q: 'mimeType="application/vnd.google-apps.spreadsheet"'
    // fields: "nextPageToken, files(id, name)"
  });
};

const listSpreadsheets = (): Promise<any> => {
  return checkAuth().then((authResult) => {
    if (authResult.error) {
      throw new Error(authResult.error);
    }
    return loadFiles();
  }).then((request) => {
    console.log('loaded files', request.result);
    return request.result.files;
  }, (error) => {
    console.log('error loading spreadsheet list', error);
    return [];
  });
};

const loadFileData = (fileId: string): Promise<any> => {
  return gapi.client.sheets.spreadsheets.get({
    spreadsheetId: fileId
  }).then((request) => {
    console.log('sheet loaded', request.result.sheets);
    const spreadsheet = request.result;
    if (spreadsheet.sheets.length < 1) {
      throw new Error('Spreadsheet does not have sheets');
    }
    const sheetName: string = spreadsheet.sheets[0].properties.title;
    return gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: fileId,
      range: sheetName
    });
  }).then((request) => {
    console.log('data loaded', request.result);
    return request.result.values;
  }, (reason) => {
    console.error(reason.result.error.message);
  });
};

const loadDriveApi = (): Promise<any> => {
  return gapi.client.load('drive', 'v3');
};

const loadSheetsApi = (): Promise<any> => {
  var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
  return gapi.client.load(discoveryUrl);
};

const load = (): Promise<GoogleClient> => {
  return new Promise((resolve) => {
    gapi.load('client', () => {
      console.log('google client loading');
      resolve();
    });
  }).then(() => {
    return Promise.all([loadDriveApi(), loadSheetsApi()]);
  }).then(() => {
    return {
      listSpreadsheets: listSpreadsheets,
      loadFileData: loadFileData,
    };
  });
};

export default {
  load: load
};