import { instance } from "..";

const getAllTrips = async () => {
  const { data } = await instance.get("/allTrips");
  return data;
};

const getTripByID = async (id) => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

const createTrip = async (tripInfo) => {
  const formData = new FormData();

  for (const key in tripInfo) {
    if (key != "image") formData.append(key, tripInfo[key]);
  }

  formData.append("image", {
    uri: tripInfo.image,
    type: "image/jpeg",
    name: "image.jpg",
  });
  console.log("form data", formData);
  const { data } = await instance.post("/", formData);
  return data;
};

export { getAllTrips, getTripByID, createTrip };
