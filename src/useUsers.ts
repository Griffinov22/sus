let cachedPromise: Promise<{ name: string; coolThing: string }[]> | null = null;

export const useUsers = () => {
  if (!cachedPromise) {
    cachedPromise = new Promise<{ name: string; coolThing: string }[]>((res) => {
      setTimeout(
        () =>
          res([
            { name: "Griffin", coolThing: "he is cool" },
            { name: "Bob", coolThing: "can do a kickflip on his skateboard" },
          ]),
        2000
      );
    });
  }
  return cachedPromise;
};
