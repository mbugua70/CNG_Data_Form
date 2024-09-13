import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

// fetching single event
export async function fetchUser({ userId, signal }) {
  // const response = await fetch(
  //   `http://localhost:4040/api/v1/ba/register/${userId}`,
  //   {
  //     signal,
  //   }
  // );

  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);

  const isUser = storeTwo.user;

  if (!isUser) {
    console.log("Error working");
    const error = new Error("An error occurred while fetching the user");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const user_data = storeTwo.user;

  return user_data;
}

// updating fun
export async function updateUser({ id, user }) {
  // const response = await fetch(
  //   `http://localhost:4040/api/v1/ba/register/${id}`,
  //   {
  //     method: "PATCH",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  localStorage.setItem("Auth", JSON.stringify({ user: user }));

  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);
  const isUser = storeTwo.user;

  if (!isUser) {
    const error = new Error("An error occurred while updating the user");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  // const userData = await response.clone().json();
  // const loginData = JSON.stringify(userData);
  // console.log(loginData);

  const user_data = storeTwo;

  return user_data;
}
