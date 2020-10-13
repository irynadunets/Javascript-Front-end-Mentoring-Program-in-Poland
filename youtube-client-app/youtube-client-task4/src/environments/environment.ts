// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export interface Environment {
  production: boolean;
  YOUTUBE_URL: string;
  YOUTUBE_KEY: string;
  terms: number[];
  colors: string[];
}

export const environment: Environment = {
  production: false,
  YOUTUBE_URL: 'https://www.googleapis.com/youtube/v3',
  YOUTUBE_KEY: 'AIzaSyB8diZn13NqYqZjFiot7Z8rn7DQ3wHlV_I',
  terms: [1, 6, 7],
  colors: [ 'red', 'yellow', 'green', 'blue' ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
