import { useQuery, enabled } from "react-query";
import axios from "axios";

import { calenderDemo } from "../constant/constants";

const fetchData = () => {
  return axios.get("https://demo-api.digialpha.cloud/api/calender-demo");
};

export const useCalenderData = (onSuccess, onError) => {
  return useQuery(calenderDemo, fetchData, {
    enabled,
    onSuccess: onSuccess,
    onError: onError,
    refetchOnWindowFocus: false,
  });
};
