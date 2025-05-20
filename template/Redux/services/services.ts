import { axiosClient } from "../../Constants/axiosClient";
import { formatError } from "../../Utils/CommonFunctions";

//define more services for APi calls here.
export const LoginService = async (phoneNumber: string) => {
  try {
    const response = await axiosClient.post("mobile/auth/get-otp", {
      phone: phoneNumber,
    });
    return response.data;
  } catch (error: any) {
    return formatError(error);
  }
};