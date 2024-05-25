import { NoticeCategory } from "@/types";

export const JSONParser = <T>(data: T): T => JSON.parse(JSON.stringify(data));

export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to read the blob as base64."));
      }
    };
    reader.onerror = () => {
      reject(new Error("Error reading the blob."));
    };
    reader.readAsDataURL(blob);
  });
};

export function getCategory(category: NoticeCategory) {
  switch (category) {
    case "sell":
      return "Sell";
    case "in-good-hands":
      return "In good hands";
    case "lost-found":
      return "lost/found";
  }
}
