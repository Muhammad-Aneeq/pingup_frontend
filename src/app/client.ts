export const registerUser = async (userData: any) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache:"no-store",
      body: JSON.stringify(userData),
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error>>>>", error);
  }
};

export const loginUser = async (userData: any) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache:"no-store",
      body: JSON.stringify(userData),
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error>>>>", error);
  }
};

export const editUser = async (id: string, userData: any) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`;
    const res = await fetch(url, {
      method: "PATCH",
      cache:"no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error>>>>", error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      cache:"no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
       if(res.ok){
        return {"message": "user deleted Successfully!"}
       }

  } catch (error) {
    console.log("error>>>>", error);
  }
};
