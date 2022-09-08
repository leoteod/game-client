import { useHttp } from "@/composables/useHttp";

interface FormInterface {
  email: string;
  password: string;
  password_confirmation?: string;
}

export function AccountsController() {
  const { fetch } = useHttp();
  async function login(form: FormInterface) {
    const response = await fetch<FormInterface>({
      method: "post",
      url: "auth/login",
      data: form,
      auth: false,
    });
    if (!response.error) {
      localStorage.setItem("token", response.data.token);
      return {
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  }
  async function register(form: FormInterface) {
    const response = await fetch<FormInterface>({
      method: "post",
      url: "auth/register",
      data: form,
      auth: false,
    });
    if (!response.error) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  }
  return { login, register };
}
