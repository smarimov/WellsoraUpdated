import axios from "axios";
import Cookies from "js-cookie";

export type TStatus = "New" | "In Progress" | "Resolved";
export type Plan = {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  appointmentName: string;
  status: TStatus;
  services: string;
  location: string;
  date: string;
  time: string;
};
export type TCreatePlan = Omit<Plan, "_id" | "userId">;

export const getAuthToken = () => Cookies.get("wellsora_token");

export const fetchAllCarePlans = async () => {
  const AUTH_TOKEN = getAuthToken();
  if (!AUTH_TOKEN) {
    console.error("No auth token found");
    return;
  }

  const { data } = await axios.get(
    "https://proxy-api-service-dot-wellsora-app.uc.r.appspot.com/api/proxy/careplan",
    {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
    }
  );

  return data;
};

export const createCarePlan = async (payload: TCreatePlan): Promise<Plan> => {
  const AUTH_TOKEN = getAuthToken();
  if (!AUTH_TOKEN) {
    throw new Error("No auth token found"); // ✅ Throw an error instead of returning void
  }

  const { data } = await axios.post<Plan>(
    "https://proxy-api-service-dot-wellsora-app.uc.r.appspot.com/api/proxy/careplan",
    payload,
    {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
    }
  );

  return data;
};

export const deleteCarePlan = async (
  carePlanId: string
): Promise<{ success: boolean }> => {
  const AUTH_TOKEN = getAuthToken();
  if (!AUTH_TOKEN) {
    throw new Error("No auth token found");
  }

  const response = await axios.delete<{ success: boolean }>(
    `https://proxy-api-service-dot-wellsora-app.uc.r.appspot.com/api/proxy/careplan/${carePlanId}`,
    {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
    }
  );

  return response.data; // Response should include { success: true } from backend
};

export const updateCarePlan = async ({
  id,
  updatedData,
}: {
  id: string;
  updatedData: Partial<TCreatePlan>;
}): Promise<Plan> => {
  const AUTH_TOKEN = getAuthToken();
  if (!AUTH_TOKEN) {
    throw new Error("No auth token found");
  }

  const response = await axios.put<Plan>(
    `https://proxy-api-service-dot-wellsora-app.uc.r.appspot.com/api/proxy/careplan/${id}`,
    updatedData,
    {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
    }
  );

  return response.data; // ✅ Always return the updated Plan
};
