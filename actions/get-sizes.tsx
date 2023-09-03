import { Size } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
  console.error("API base URL is not defined");
}

const URL = `${API_BASE_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      console.log("API Response:", res);
      throw new Error(`API request failed with status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default getSizes;
