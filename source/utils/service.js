import request from "./fetch";

export const PatientLogin = (networkrequest) =>
    request.post("PatientLogin", networkrequest);

export const PatientRegister = (networkrequest) =>
    request.post("PatientRegister", networkrequest);

export const PatientForgotPassword = (networkrequest) =>
    request.post("PatientForgotPassword", networkrequest);

export const PatientOtp = (networkrequest) =>
    request.post("PatientOtp", networkrequest);

export const PatientResetPassword = (networkrequest) =>
    request.post("PatientResetPassword", networkrequest);

export const PatientResendPassword = (networkrequest) =>
    request.post("PatientResendPassword", networkrequest);

export const PatientProfileDetails = (networkrequest) =>
    request.post("PatientProfileDetails", networkrequest);

export const PatientMc = (networkrequest) =>
    request.post("PatientMc", networkrequest);

export const PatientNews = (networkrequest) =>
    request.post("PatientNews", networkrequest);

export const PatientDoctorList = (networkrequest) =>
    request.post("PatientDoctorList", networkrequest);

export const PatientSpeciality = (networkrequest) =>
    request.post("PatientSpeciality", networkrequest);

export const PatientAllnews = (networkrequest) =>
    request.post("PatientAllnews", networkrequest);

export const PatientAllDoctors = (networkrequest) =>
    request.post("PatientAllDoctors", networkrequest);

export const getAllbranch = (networkrequest) =>
    request.post("getAllbranch", networkrequest);

export const getDoctorDetails = (networkrequest) =>
    request.post("getDoctorDetails", networkrequest);

export const getProfile = (networkrequest) =>
    request.post("getProfile", networkrequest);

export const logout = (networkrequest) =>
    request.post("logout", networkrequest);

export const PatientAppointment = (networkrequest) =>
    request.post("PatientAppointment", networkrequest);

export const AppointmentDetails = (networkrequest) =>
    request.post("AppointmentDetails", networkrequest);

export const ModesList = (networkrequest) =>
    request.post("ModesList", networkrequest);

export const PatientInfo = (networkrequest) =>
    request.post("PatientInfo", networkrequest);

export const reviewSub = (networkrequest) =>
    request.post("reviewSub", networkrequest);

export const BookAppointment = (networkrequest) =>
    request.post("BookAppointment", networkrequest);

export const videostart = (networkrequest) =>
    request.post("videostart", networkrequest);

export const slotsTime = (networkrequest) =>
    request.post("slotsTime", networkrequest);

export const Token = (networkrequest) =>
    request.post("Token", networkrequest);
