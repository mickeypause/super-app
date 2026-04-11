import { useCallback, useState } from "react";

/** Auth module hook (not shared). */
export function useAuthForm(initial = "") {
  const [value, setValue] = useState(initial);

  const reset = useCallback(() => {
    setValue(initial);
  }, [initial]);

  return { value, setValue, reset };
}
