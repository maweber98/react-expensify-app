import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Production Database Config
// const firebaseConfig = {
//     apiKey: "AIzaSyBgFfo4m0cKPSkM_g6O2ECnaQdr-vv28eA",
//     authDomain: "expensify-44846.firebaseapp.com",
//     databaseURL: "https://expensify-44846-default-rtdb.firebaseio.com",
//     projectId: "expensify-44846",
//     storageBucket: "expensify-44846.appspot.com",
//     messagingSenderId: "114677978499",
//     appId: "1:114677978499:web:62da9dada1a75138ef12b6",
//     measurementId: "G-EJ8F2C5EZY"
// };

// Test Database Config
// const firebaseConfig = {
//     apiKey: "AIzaSyDDxdK7-N8OrthzzkY8XtZ20lcY3gwVFXM",
//     authDomain: "expensify-test-73ef3.firebaseapp.com",
//     databaseURL: "https://expensify-test-73ef3-default-rtdb.firebaseio.com",
//     projectId: "expensify-test-73ef3",
//     storageBucket: "expensify-test-73ef3.appspot.com",
//     messagingSenderId: "327931694043",
//     appId: "1:327931694043:web:f93efa24f857472861f5fe"
//   };

console.log('firebase', process.env.FIREBASE_AUTH_DOMAIN);

firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childShapshot) => {
//             expenses.push({
//                 id: childShapshot.key,
//                 ...childShapshot.val()
//             });
//         });
//         console.log(expenses);
//     })
//     .catch((e) => {
//         console.log('Error fetching', e);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childShapshot) => {
//             expenses.push({
//                 id: childShapshot.key,
//                 ...childShapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Last months rent',
//     amount: 6700,
//     createdAt: 1000
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// database.ref().set({
//     name: 'Mark Weber',
//     age: 49,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Alliance',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data has been saved!!');
// }).catch((e) => {
//     console.log('Something went wrong ', e);
// });

// Remove isSingle from database using remove method
// database.ref('isSingle').remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch((e) => {
//     console.log("Remove failed: ", e);
//   });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });
