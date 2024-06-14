import httpClient from "@/api/index";
import { Alert } from "react-native";

export const BusRoutesService = {
  getBusRoutesList: async function () {
    return await httpClient
      .get("/bus-routes")
      .then((response) => {
        console.log("bus-routes", response.data);
        return response.data;
      })
      .catch((error) => console.log("API call failed: ", error));
  },
};
