

export interface TopDoctors {
  photoPath: string
  fullName: string
  specialize: string
  num: number
}

export interface TopSpecializations {
  
  fullName: string
  
  num: number
}

export interface NumberOfRequest {
  numOfRequests: number
  numOfPendingRequests: number
  numOfCompletedRequests: number
  numOfCancelledRequests: number
}

export interface AllDoctorAdminObject {
  totalCount: number
  totalPages: number
  currentPage: number
  pageSize: number
  data: AllDoctorsAdminList[]
}

export interface AllDoctorsAdminList {
  id: number
  photoPath: string
  fullName: string
  email: string
  phone: string
  specialize: string
  gender: string
}

export interface AboutDoctor {
  photoPath: string
  firstName: string
  lastName: string
  email: string
  phone: string
  specialize: string
  gender: string
  dateOfBirth: string
}

export type SpecializeList = Specialize[]

export interface Specialize {
  id: number
  name: string
}
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}