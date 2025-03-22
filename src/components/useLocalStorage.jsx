// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// export default function useLocalStorage(key, defaultValue) {
//   const [value, setValue] = useState(() => {
//     let currentValue;

//     try {
//       currentValue = JSON.parse(
//         localStorage.getItem(key) || String(defaultValue)
//       );
//     } catch (error) {
//       currentValue = defaultValue;
//     }
//     console.log("this is the current value  :" + currentValue);
//     return currentValue;
//   });
//   console.log("value   :" + value);
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);
//   return [value, setValue];
// }
