// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from firebaseapp;
import { getAnalytics } from firebaseanalytics;

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCnrdKenPPtot-5eXe81wDnj4trAfCCQuI",
    authDomain: "ionicfirestorestasks.firebaseapp.com",
    databaseURL: "httpsionicfirestorestasks-default-rtdb.firebaseio.com",
    projectId: "ionicfirestorestasks",
    storageBucket: "storageBucket ionicfirestorestasks.appspot.com",
    messagingSenderId: "550252806751",
    appId: "1550252806751web7ecc47f074e332012611ea",
    measurementId: "G-YL92KMX9Z9"
  }

};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
