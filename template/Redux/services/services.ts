import { axiosClient } from "../../Constants/axiosClient";
import {
  FCM_TOKEN,
  REGISTRATIONTOKEN,
  TOKEN,
} from "../../Constants/KeyConstant";
import { formatError } from "../../Utils/CommonFunctions";
import { _retrieveData } from "../../Utils/StoragePreference";

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

export const VerifyOTPService = async (params: any, id: string) => {
  try {
    const response = await axiosClient.post("mobile/auth/verify-otp", params, {
      headers: { otpToken: id },
    });
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetUserAfterOtp = async (id: string) => {
  try {
    const token = await _retrieveData(REGISTRATIONTOKEN);
    const response: any = await axiosClient.get(`mobile/auth/user`, {
      headers: { registrationToken: id },
    });
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const ResendOtpService = async (otp: string, token: string) => {
  try {
    const response = await axiosClient.post("mobile/auth/verify-otp", {
      otp: otp,
    });
    return response.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const getSpecialization = async () => {
  try {
    const response = await axiosClient.get("mobile/dropdown/specializations", {
      params: { sortOrder: "asc" },
    });
    return response.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const getWorkArea = async () => {
  try {
    const response = await axiosClient.get("mobile/dropdown/work-areas", {
      params: {
        sortOrder: "asc",
        sortField: "indexId",
      },
    });
    return response.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const getCitiesService = async (search?: string, pageNum?: number) => {
  try {
    const response = await axiosClient.get("mobile/dropdown/cities", {
      params: {
        search: search,
        pageNum: pageNum,
        pageLimit: 20,
        sortOrder: "asc",
        sortField: "cityName",
      },
    });
    return response.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const callRegisterUserService = async (params: any) => {
  try {
    const token = await _retrieveData(REGISTRATIONTOKEN);
    const response: any = await axiosClient.post(
      "mobile/auth/register",
      params,
      { headers: { registrationToken: token, language: "en" } }
    );
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetUserDetailsService = async (userId: string) => {
  try {
    const response: any = await axiosClient.get(`mobile/users/${userId}`);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const UpdateUserDetailsService = async (id: string, params: any) => {
  try {
    const response = await axiosClient.put(`mobile/users/${id}`, params);
    return response.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetProductCategoryService = async (
  search?: string,
  page?: number
) => {
  try {
    const response = await axiosClient.get(`mobile/product-categories`, {
      params: {
        search: search,
        pageNum: page,
        pageLimit: 20,
        sortOrder: "asc",
      },
    });
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetProductsByCategoryIdService = async (
  _id: string,
  search?: string,
  page?: number
) => {
  try {
    const response = await axiosClient.get(
      `mobile/product/product-category/${_id}`,
      {
        params: { search: search, pageNum: page, pageLimit: 20 },
      }
    );
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetProductByIdService = async (_id: string) => {
  try {
    const response = await axiosClient.get(`mobile/product/${_id}`);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetGiftsService = async () => {
  try {
    const response = await axiosClient.get(`mobile/nirlat-gifts`, {
      params: {
        pageLimit: "all",
      },
    });
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetGiftByIdService = async (_id: string) => {
  try {
    const response = await axiosClient.get(`mobile/nirlat-gifts/${_id}`);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const BuyNirlatGiftsService = async (param: any) => {
  try {
    const response = await axiosClient.post(`mobile/nirlat-gifts`, param);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetBuyMePresentService = async (id: string) => {
  try {
    const response = await axiosClient.get(`mobile/buy-me-gifts/${id}`);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetBuySuppliersService = async (pageNum: number) => {
  try {
    const response = await axiosClient.get(`mobile/buy-me-gifts/?pageNum=${pageNum}`);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};



export const GetNotificationService = async (
  search?: string,
  page?: number
) => {
  try {
    const response = await axiosClient.get(`mobile/push-notification`, {
      params: { search: search, pageNum: page },
    });
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const DeleteNotificationService = async (_id: string) => {
  try {
    const response = await axiosClient.delete(
      `mobile/push-notification/${_id}`
    );
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetNotificationDetailsByIdService = async (_id: string) => {
  try {
    const response = await axiosClient.get(`mobile/push-notification/${_id}`);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const getTipsService = async (search?: Text, page?: number) => {
  try {
    const response = await axiosClient.get(
      `mobile/nirlat-consultation/nirlat-tips`,
      { params: { search: search, pageNum: page, pageLimit: 10 } }
    );
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const getInstructionalVideoService = async (
  search?: Text,
  page?: number
) => {
  try {
    const response = await axiosClient.get(
      `mobile/nirlat-consultation/instructional-video`,
      { params: { search: search, pageNum: page, pageLimit: 10 } }
    );
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const getColorCombinationService = async (
  id?: string,
  search?: string,
  page?: number
) => {
  try {
    const response = await axiosClient.get(`mobile/color-combination`, {
      params: { typeId: id, search: search, pageNum: page, pageLimit: 10 },
    });
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const getSalesListService = async (search?: string, page?: number) => {
  try {
    const response = await axiosClient.get(`mobile/business/sale`, {
      params: { search: search, pageNum: page, pageLimit: 10 },
    });
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetRegisteredEventListByUserId = async (
  userId: string,
  searchText: string
) => {
  try {
    const response = await axiosClient.get(
      `mobile/events/user-event/${userId}`,
      {
        params: {
          search: searchText,
        },
      }
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetMyPriceQuotesService = async (searchText: string) => {
  try {
    const response = await axiosClient.get("mobile/price-offer", {
      params: {
        search: searchText,
      },
    });
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetMyPriceQuoteByIdService = async (id: string) => {
  try {
    const response = await axiosClient.get(`mobile/price-offer/${id}`);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetMyPriceQuotePdfByIdService = async (
  id: string,
  params: any
) => {
  try {
    const response = await axiosClient.post(
      `mobile/price-offer/pdf/${id}`,
      params
    );
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const CreatePriceOfferService = async (params: any) => {
  try {
    const response = await axiosClient.post("mobile/price-offer", params);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const UpdatePriceOfferService = async (id: string, params: any) => {
  try {
    const response = await axiosClient.put(`mobile/price-offer/${id}`, params);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetRequestHistoryService = async (
  userId: string,
  searchText: string
) => {
  try {
    const response = await axiosClient.get(
      `salesforce/service-calls/${userId}`,
      {
        params: {
          search: searchText,
        },
      }
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};
export const GetTechnicalConsultantService = async (
  userId: string,
  searchText: string
) => {
  try {
    const response = await axiosClient.get(
      `salesforce/technical-consultants/${userId}`,
      {
        params: {
          search: searchText,
        },
      }
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetProfessionalsService = async (
  search?: string,
  page?: number,
  specializationName?: string
) => {
  try {
    const response = await axiosClient.get("mobile/professionals", {
      params: {
        search: search,
        pageNum: page,
        pageLimit: 10,
        specializationName: specializationName,
      },
    });
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetProfessionalsDetailService = async (id: string) => {
  try {
    const response = await axiosClient.get(`mobile/professionals/${id}`);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetAllPostService = async (
  search?: string,
  page?: number,
  userId?: string
) => {
  try {
    const response = await axiosClient.get("mobile/user-posts/", {
      params: { search: search, pageNum: page, pageLimit: 10, userId: userId },
    });
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetInvoicesByUserIDService = async (
  userId: any,
  search: string
) => {
  const token = await _retrieveData(TOKEN);
  try {
    const response = await axiosClient.get(`mobile/invoices?userId=${userId}`, {
      params: {
        search: search,
      },
    });
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const AddInvoiceService = async (userId: any, path: string) => {
  const token = await _retrieveData(TOKEN);
  const params = {
    userId: userId,
    image: path,
  };
  try {
    const response = await axiosClient.post(`mobile/invoices`, params);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const getPrivateImage = async (key: string, imagePath: string) => {
  const params = {
    urls: [
      {
        key: key,
        value: imagePath,
      },
    ],
  };
  try {
    const response = await axiosClient.post(`files/get-presigned-urls`, params);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const CreateBusinessCardService = async (params: any) => {
  try {
    const response = await axiosClient.post("mobile/business-card", params);
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const UpdateBusinessCardService = async (id: string, params: any) => {
  try {
    const response = await axiosClient.put(
      `mobile/business-card/${id}`,
      params
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetCommentByPostIdService = async (id: string, type: string) => {
  try {
    const response = await axiosClient.get(
      `mobile/user-posts/like-comment/${id}`,
      { params: { type: type } }
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetLikeByPostIdService = async (id: string) => {
  try {
    const response = await axiosClient.get(
      `mobile/user-posts/like-comment/${id}`
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const CommentOnPostService = async (param: any) => {
  try {
    const response = await axiosClient.post(
      "mobile/user-posts/comment-on-post",
      param
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const getUserBusinessCardService = async (userId: any) => {
  try {
    const response = await axiosClient.get(`mobile/business-card/user`);
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const deleteBusinessCardService = async (userId: any) => {
  try {
    const response = await axiosClient.delete(`mobile/business-card/${userId}`);
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const LikeOnPostService = async (params: any) => {
  try {
    const response = await axiosClient.post(
      "mobile/user-posts/like-post",
      params
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const LikeOnCommentService = async (params: any) => {
  try {
    const response = await axiosClient.post(
      "mobile/user-posts/like-comment",
      params
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const SharePostService = async (postId: string) => {
  try {
    const response = await axiosClient.put(
      `mobile/user-posts/share-post/${postId}`
    );
    return response.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const CreateUserPostService = async (params: any) => {
  try {
    const response = await axiosClient.post("mobile/user-posts", {
      userPosts: params,
    });
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const SubmitSurveyService = async (params: any) => {
  try {
    const response = await axiosClient.post(
      "mobile/user-posts/submit-survey",
      params
    );
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const RegisterEventService = async (params: any) => {
  try {
    const response = await axiosClient.post("mobile/events/register", params);
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const CancelEventService = async (eventId: string) => {
  try {
    const response = await axiosClient.put(
      `mobile/events/cancel-registration/${eventId}`
    );
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const DeletePostService = async (postId: string) => {
  try {
    const response = await axiosClient.delete(`mobile/user-posts/${postId}`, {
      params: { isDeleted: true },
    });
    return response;
  } catch (error) {
    return formatError(error);
  }
};

export const UpdateUserPostService = async (postId: string, params: any) => {
  try {
    const response = await axiosClient.put(`mobile/user-posts/${postId}`, {
      userPosts: params,
    });
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const getPointsReportService = async (page?: number) => {
  try {
    const response = await axiosClient.get(`mobile/point-report`, {
      params: { pageNum: page, pageLimit: 20 },
    });
    return response;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetUserNotificationCount = async () => {
  try {
    const response = await axiosClient.get(
      "mobile/push-notification/notification-count"
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetAllStoreService = async (params: any) => {
  try {
    const response = await axiosClient.get("mobile/business", {
      params: params,
    });
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GetStoreDetailService = async (storeId?: string) => {
  try {
    const response = await axiosClient.get(`mobile/business/${storeId}`);
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const FavouriteStoreToggleService = async (param: any) => {
  try {
    const response = await axiosClient.post(
      "mobile/business/favourite-business",
      param
    );
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};
export const GetCombinationTypesService = async () => {
  try {
    const response = await axiosClient.get("mobile/combination-types", {
      params: {
        sortField: "sequence",
        sortOrder: "asc",
      },
    });
    return response;
  } catch (error) {
    return formatError(error);
  }
};

export const getPointsSuggestionService = async () => {
  try {
    const response = await axiosClient.get("mobile/point-report/suggestion");
    return response;
  } catch (error) {
    return formatError(error);
  }
};

export const LogoutService = async (_id: any) => {
  try {
    const response = await axiosClient.post(`mobile/auth/logout/${_id}`);
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GetColorFanCategoryService = async () => {
  try {
    const response = await axiosClient.get("mobile/color-fan", {
      params: {
        sortField: "sequence",
        sortOrder: "asc",
      },
    });
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const PrivacyPolicyService = async (contentType = "t&c") => {
  try {
    const response = await axiosClient.get(`mobile/app-content`, {
      params: { contentType: contentType },
    });
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GetColorFanByIdService = async (
  categoryId: string,
  shadeGroup: string,
  fan: string,
  search: string,
  page: number
) => {
  try {
    const response = await axiosClient.get(`mobile/color-fan/${categoryId}`, {
      params: {
        search: search,
        pageNum: page,
        pageLimit: 50,
        shadeGroup: shadeGroup,
        fan: fan,
        sortOrder: "asc",
        sortField: "colorName",
      },
    });
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GetAllPromotionService = async () => {
  try {
    const response = await axiosClient.get("mobile/nirlat-promotion");
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GetPromotionByIdService = async (id: string) => {
  try {
    const response = await axiosClient.get(`mobile/nirlat-promotion/${id}`);
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GetPromotionByIdStoreList = async (id: string, search: string = "") => {
  try {
    const response = await axiosClient.get(`mobile/nirlat-promotion/get-business-list/${id}?search=${search}&pageLimit=all`);
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GeneratePromotionQRCodeService = async (param: any) => {
  try {
    const response = await axiosClient.post(
      "mobile/nirlat-promotion/generate-qrcode",
      param
    );
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GetPostByIdService = async (
  postId: string,
  isPendingPost?: boolean
) => {
  try {
    const response = await axiosClient.get(`mobile/user-posts/${postId}`, {
      params: {
        ...(isPendingPost ? { pendingUserPosts: isPendingPost } : {}),
      },
    });
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetCertificateListService = async (sfContactId: string) => {
  try {
    const response = await axiosClient.get(
      `salesforce/certificates/${sfContactId}`
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const CreateBuyMeGiftsLink = async (params: any, id: string) => {
  try {
    const response = await axiosClient.post(
      `mobile/buy-me-gifts/${id}`,
      params
    );
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const GetEventDetailById = async (id: string) => {
  try {
    const response = await axiosClient.get(`mobile/events/${id}`);
    return response.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GetFileFromSF = async (id: string) => {
  try {
    const response = await axiosClient.post(`salesforce/file/${id}`);
    return response?.data;
  } catch (error: any) {
    return formatError(error);
  }
};

export const SendUserLastSeenService = async (id: string) => {
  try {
    const response = await axiosClient.put(`mobile/auth/lastseen/${id}`);
    return response.data;
  } catch (error) {
    return formatError(error);
  }
};

export const ContactConsultantService = async (param: any) => {
  try {
    const response = await axiosClient.post(
      "salesforce/create-consultant-task",
      param
    );
    return response.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GetColorFanFiltersById = async (id: string) => {
  try {
    const response = await axiosClient.get(
      `mobile/color-fan/fan-filters/${id}`
    );
    return response.data;
  } catch (error) {
    return formatError(error);
  }
};
export const CheckMaintenance = async () => {
  try {
    const response = await axiosClient.get(`mobile/api-settings/`);
    return response.data;
  } catch (error) {
    return formatError(error);
  }
};

export const FavouriteProductToggleService = async (param: any) => {
  try {
    const response = await axiosClient.post(
      "mobile/product/favourite-products",
      param
    );
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const FavouritePostToggleService = async (param: any) => {
  try {
    const response = await axiosClient.post(
      "mobile/user-posts/favourite-posts",
      param
    );
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const FavouritePresentToggleService = async (param: any) => {
  try {
    const response = await axiosClient.post(
      "mobile/nirlat-gifts/favourite-gifts",
      param
    );
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};
export const FavouriteBuyMeToggleService = async (param: any) => {
  try {
    const response = await axiosClient.post(
      "mobile/buy-me-gifts/favourite-gifts",
      param
    );
    return response?.data;
  } catch (error) {
    return formatError(error);
  }
};

export const GetBuyMeFavouriteService = async (id: string) => {
  try {
    const response = await axiosClient.get(
      `/mobile/buy-me-gifts/favourite/${id}`
    );
    return response.data;
  } catch (error) {
    return formatError(error);
  }
};

export const getTipsById = async (id: string) => {
  try {
    const response = await axiosClient.get(
      `/mobile/nirlat-consultation/nirlat-tips/${id}`
    );
    return response?.data;
  } catch (error: any) {
    console.log("error==>", error);
    return formatError(error);
  }
};
