export const useAuth = (): string | boolean => {
  const auth = localStorage.getItem("auth");
  return auth == null ? false : auth;
};
