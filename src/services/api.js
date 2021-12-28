import axios from 'axios';

const api = axios.create({
  baseURL:"http://10.0.2.2:3333"
})


export default api;
/* 
*
*  android com emulador : adb reverse tcp:3000 tcp:3000   // 3000 number port  ( adb reverse )  
*  android com emulador : 10.0.2.2 (Android studio )
*  android com  outro emulador :  10.0.2.2 ( genymotion )
*
*
*
* */