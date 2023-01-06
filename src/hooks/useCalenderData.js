import { useQuery } from "react-query";
import axios from "axios";

import { calenderDemo } from "../constant/constants";

const fetchData = () => {
  return axios.get("https://demo-api.digialpha.cloud/api/calender-demo");
};

export const useCalenderData = (onSuccess, onError) => {
  return useQuery(calenderDemo, fetchData, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

// // instead of id, usually we call querykey,querykey is one of the object in useQuery method
// const fetchPostWithID = ({ queryKey }) => {
//   const id = queryKey[1];
//   console.log("AAAAAAAAAAAAA", id);
//   return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
// };

// export const usePostDataWitID = (id) => {
//   // return useQuery(["MSK", id], () => fetchPostWithID(id));
//   return useQuery(["MSK", id], fetchPostWithID);
// };
