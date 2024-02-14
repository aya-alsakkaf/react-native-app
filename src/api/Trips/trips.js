import { instance } from "..";

const getAllTrips = async () => {
  const { data } = await instance.get("/allTrips");
  return data;
};

const getTripByID = async (id) => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

export { getAllTrips, getTripByID };
