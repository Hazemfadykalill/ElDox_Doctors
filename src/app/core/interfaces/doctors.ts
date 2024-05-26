


  export interface AboutDoctorNew {
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
    times: TimeBook[]
  }
  
  export interface TimeBook {
    id: number
    time: string
  }

  export interface PatientBookingInDoctor {
    id: number
    photoPath: string
    patientName: string
    email: string
    phone: string
    gender: string
    age: number
    appointment: string
    bookingStatus: string
  }
  

  export interface AboutDoctorNewTwo {
    id: number
    photoPath: string
    fullName: string
    email: string
    phone: string
    specialize: string
    price: number
    gender: string
    appointments: Appointment[]
    dateOfBirth:string
  }