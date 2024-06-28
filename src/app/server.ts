export const getAllUsers = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/users`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error>>>>", error);
  }
};

export const getUser = async (id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error>>>>", error);
  }
};
