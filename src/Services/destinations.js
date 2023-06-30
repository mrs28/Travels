import { initializeApp } from 'firebase/app';
import {getDatabase, ref, child, get, set, update } from 'firebase/database';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlHnoiFgGjs4K9dxC-pDSp4WOOu5so6aQ",
  authDomain: "travels-e47bb.firebaseapp.com",
  databaseURL: "https://travels-e47bb-default-rtdb.firebaseio.com",
  projectId: "travels-e47bb",
  storageBucket: "travels-e47bb.appspot.com",
  messagingSenderId: "196608883451",
  appId: "1:196608883451:web:cffdab037bc226ac3d0e5e"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();
const dbRef = ref(database);


function list(){
  
   return new Promise((resolve, reject)=>{
    get(child(dbRef, `destinos`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          resolve(snapshot.val())
        } else {
          console.log("No data available");
          resolve([])
        }
      }).catch((error) => {
        console.error(error);
        reject(error)
      });
   })
   
    
}

function add(destination){
//escribe un objeto destination en una ubicación específica de la base de datos con la función set()
   return new Promise((resolve, reject)=>{
    set(ref(database, 'destinos/' + destination.id), destination).then(()=>{resolve(true)}).catch((error)=>{reject(error)})
});
}

function remove(destinationId){
   
  return new Promise((resolve, reject)=>{
    set(ref(database, 'destinos/' + destinationId), null).then(()=>{resolve(true)}).catch((error)=>{reject(error)})
});
}

export {list, add, update, remove};