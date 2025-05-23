import { useEffect, useState } from "react";
import { getLocalStorage } from "@/lib/localStorage";

export default function useLocalStorageUser() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = getLocalStorage("user");
    setUser(userData);
  }, []);

  return user;
}
