export interface ObjectPatients {
    totalCount: number
    totalPages: number
    currentPage: number
    pageSize: number
    data: PatientsList[]
  }
  
  export interface PatientsList {
    id: number
    photoPath?: string
    fullName: string
    email: string
    phone: string
    gender: string
    dateOfBirth: string
  }
  

  export interface Patients {
    details: Details
    bookings: any[]
  }
  
  export interface Details {
    id: number
    photoPath: string
    fullName: string
    email: string
    phone: string
    gender: string
    dateOfBirth: string
  }

  // to patients book should be know information about doctor details
  // export type Root = Root2[]

export interface DoctorDetailsToBookPatients {
  id: number
  photoPath: string
  fullName: string
  email: string
  phone: string
  specialize: string
  price: number
  gender: string
  appointments: Appointment[]
}

export interface Appointment {
  day: string
  times: Time[]
}

export interface Time {
  id: number
  time: string
}

export interface Pagination {
  currentPage: number
  totalPages: number
  pageSize: number
  totalCount: number
  hasPrevious: boolean
  hasNext: boolean
}