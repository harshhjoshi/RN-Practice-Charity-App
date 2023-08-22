export const endpointProact = {
  routes: {
    PatientLogin: 'auth/login',
    PatientRegister: 'auth/register',
    PatientForgotPassword: 'auth/password/forgot',
    PatientOtp: 'auth/otp/verify',
    PatientResetPassword: 'auth/password/reset',
    PatientProfileDetails: 'auth/setprofile',
    PatientResendPassword: 'auth/otp/resend',
    PatientMc: 'mobile-config/mc/all',
    PatientNews: 'mobile-config/news/all',
    PatientDoctorList: 'mobile-config/doctor/all',
    PatientSpeciality: 'spl/all',
    PatientAllnews: 'news/all',
    PatientAllDoctors: 'doctor/all',
    getAllbranch: 'brc/all',
    getDoctorDetails: 'doctor/get',
    getProfile: 'auth/getprofile',
    logout: 'auth/logout',
    PatientAppointment: 'apt/tab',
    AppointmentDetails: 'apt',
    ModesList: 'appointment-mode/all',
    PatientInfo: 'apt/patient-info',
    reviewSub: 'doctor-rating/create',
    BookAppointment: 'apt/create',
    videostart: 'av/call',
    slotsTime: 'apt/doc/slots',
    Token: 'notification/store'

  }
};
