import instance from ".";

const getAllBooks = async () => {
  const { data } = await instance.get("/api/books/");
  return data;
};

const getBookByID = async (id) => {
  const { data } = await instance.get(`/api/books/${id}`);
  return data;
};

export { getAllBooks, getBookByID };
