import httpClient from "@/api";
import { Toast } from "react-native-toast-alert";

export const BusRoutesService = {
  getRoutesList: async function () {
    return await httpClient
      .get("/bus-routes")
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);

        Toast.error("Failed to fetch bus routes list");
      });
  },
};
