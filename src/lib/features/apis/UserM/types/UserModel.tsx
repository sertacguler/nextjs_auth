export interface UserModel {
  id: number;
  name: string;
  lastname: string;
  password: string;
  email: string;
  mobile: string;
  mobileCode: string | undefined;
  address: string;
  town: string;
  state: string;
  postalCode: string;
  birthDay: Date;
  isHost: boolean;
  isVerified: boolean;
  status: number;
  avatar: string;
  accountType: number;
  idNumber: string;
  emergencyContact: string | undefined;
  emergencyContactMobileCode: string | undefined;
  emergencyContactMobile: string | undefined;
  updateDate: Date;
  createDate: Date;
  refCode: string | undefined;
}
