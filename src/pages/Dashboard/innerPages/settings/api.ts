import axios from "axios";
import { getAuthToken } from "../main/api";
import { TUser, TUserForm } from "./useUser";

const userUrl = import.meta.env.VITE_USER_URL;

export const fetchUserDetail = async () => {
  const AUTH_TOKEN = getAuthToken();
  if (!AUTH_TOKEN) {
    console.error("No auth token found");
    return;
  }

  const { data } = await axios.get(
    userUrl,
    {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
    }
  );

  return data;
};

export const updateUserDetail = async ({
  //   id,
  updatedData,
}: {
  //   id: string;
  updatedData: Partial<TUserForm>;
}): Promise<TUser> => {
  const AUTH_TOKEN = getAuthToken();
  if (!AUTH_TOKEN) {
    throw new Error("No auth token found");
  }

  const response = await axios.put<TUser>(
    userUrl,
    updatedData,
    {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
    }
  );

  return response.data; // ✅ Always return the updated Plan
};
