import {
  AddRoomModal,
  Color,
  CreateBusinessCardModal,
  EventModal,
  Post,
  RegistrationModal,
  Room,
} from "../Redux/types";

export type AppStackParams = {
  Login: undefined;
  HomeStack: { screen?: string };
  Splash: undefined;
  Main: undefined;
  OnBoarding: undefined;
  RegistrationFirst: { otpToken: string };
  Otp: {
    mobileNumber: string;
    otpToken: string;
  };
  PrivacyPolicy: undefined;
  Privacy: undefined;
  Home: undefined;
  RegistrationSecond: {
    formsValue: RegistrationModal;
  };
  Store: undefined;
  ArticleDetail: { _id: string };
  Referral: undefined;
  Community: undefined;
  Notification: undefined;
  NotificationDetail: {
    _id: string;
    onCallBack?: () => void;
    onDeleteCallBack?: (id: string) => void;
  };
  Points: undefined;
  Sales: undefined;
  Present: undefined;
  AccountMenu: undefined;
  StoreDetail: {
    isFromBuyGifts?: boolean;
    isFromPresent?: boolean;
    item?: any;
    _id: string;
  };
  MyCertification: undefined;
  Profile: undefined;
  CertificateDetail: {
    item: any;
    imageUrl: string;
  };
  MyEvents: {
    isRequests?: boolean;
    isTechnicalConsultants?: boolean;
    isOffers?: boolean;
    onCallBack?: () => void;
  };
  EventDetails: { model: EventModal };
  RequestDetails: { model: any };
  AddPriceQuote: { id: string; onCallBack?: () => void };
  BuyMePresents: undefined;
  AccumulatePoints: undefined;
  MyInvoices: { isFromHome?: boolean };
  ConsultantDetails: { model: any };
  ContactConsultant: undefined;
  AddRoom: { room?: Room; onCallBack?: (room: Room) => void };
  Fans: { isFromAddRoom?: boolean; onCallBack?: (color: Color) => void };
  AddInvoice: {
    isCamera?: boolean;
    onCallBack?: (path?: string) => void;
    isFromRedeem?: boolean;
    isFromHome?: boolean;
  };
  SupplierDetails: { _id: string };
  CommunityDetail: { screenTitle: string; id: string };
  NirlaTips: { _id?: string; key?: string };
  ShadeCombination: { _id?: string };
  Catalog: undefined;
  ProductList: { _id: string; name: string; productCategoryImage: string };
  ProductDetail: { _id: string; name: string };
  BusinessCard: undefined;
  CreateBusinessCard: {
    businessCard?: CreateBusinessCardModal;
    isFromEdit?: boolean;
  };
  Posts: undefined;
  WritePost: { post?: Post; isDisapproved?: boolean };
  PreviewBusinessCard: {
    onCallBack?: (stepCount: number) => void;
    businessCard?: any;
    isFromHome?: boolean;
    isOnlyPreview?: boolean;
  };
  RedeemSale: { _id: string | any };
  PostDetail: { _id: string; isPendingPost?: boolean };
};
