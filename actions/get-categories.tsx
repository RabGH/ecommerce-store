import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

console.log("API URL:", URL);

const getCategories = async (): Promise<Category[]> => {
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

export default getCategories;
