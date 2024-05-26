import { PatientAboutDoctorComponent } from './Components/PatAndDocCom/patient-about-doctor/patient-about-doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './core/guard/admin.guard';
import { patientsGuard } from './core/guard/patients.guard';
import { doctorsGuard } from './core/guard/doctors.guard';

const routes: Routes = [

  // Admin + guard true good false go auth
  {
    path: '', canActivate: [adminGuard],
    loadComponent: () =>
      import('./Components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),

    children: [
      // primary dashboard
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./Components/dashboard-two/dashboard-two.component').then(
            (m) => m.DashboardTwoComponent
          ),
        title: 'Dashboard',
      },
      // doctors
      {
        path: 'doctors',
        loadComponent: () =>
          import('./Components/doctors/doctors.component').then(
            (m) => m.DoctorsComponent
          ),
        title: 'Doctors',
        children: [
          {
            path: 'allDoctors',
            loadComponent: () =>
              import('./Components/all-doctors/all-doctors.component').then(
                (m) => m.AllDoctorsComponent
              ),
            title: 'AllDoctors',
          },
          {
            path: 'addDoctors',
            loadComponent: () =>
              import('./Components/add-doctors/add-doctors.component').then(
                (m) => m.AddDoctorsComponent
              ),
            title: 'AddDoctors',
          },
          {
            path: 'aboutDoctors/:id',
            loadComponent: () =>
              import('./Components/about-doctors/about-doctors.component').then(
                (m) => m.AboutDoctorsComponent
              ),
            title: 'AboutDoctors',
          },
          {
            path: 'editDoctors/:id',
            loadComponent: () =>
              import('./Components/edit-doctors/edit-doctors.component').then(
                (m) => m.EditDoctorsComponent
              ),
            title: 'EditDoctors',
          },
        ],
      },
      // Patients
      {
        path: 'patients',
        loadComponent: () =>
          import('./Components/patients/patients.component').then(
            (m) => m.PatientsComponent
          ),
        title: 'Patients',
        children: [
          {
            path: 'allPatients',
            loadComponent: () =>
              import('./Components/all-patients/all-patients.component').then(
                (m) => m.AllPatientsComponent
              ),
            title: 'AllPatients',
          },
          // add
          {
            path: 'addPatients',
            loadComponent: () =>
              import('./Components/add-patients/add-patients.component').then(
                (m) => m.AddPatientsComponent
              ),
            title: 'AddPatients',
          },
          // about
          {
            path: 'aboutPatients',
            loadComponent: () =>
              import(
                './Components/about-patients/about-patients.component'
              ).then((m) => m.AboutPatientsComponent),
            title: 'AboutPatients',
          },
          // edit
          {
            path: 'editPatients',
            loadComponent: () =>
              import('./Components/edit-patients/edit-patients.component').then(
                (m) => m.EditPatientsComponent
              ),
            title: 'EditPatients',
          },
        ],
      },

      // Appointments
      {
        path: 'appointments',
        loadComponent: () =>
          import('./Components/appointments/appointments.component').then(
            (m) => m.AppointmentsComponent
          ),
        title: 'Appointments',
        children: [
          {
            path: 'bookAppointments',
            loadComponent: () =>
              import(
                './Components/book-appointments/book-appointments.component'
              ).then((m) => m.BookAppointmentsComponent),
            title: 'BookAppointments',
          },

          {
            path: 'viewAllAppointments',
            loadComponent: () =>
              import(
                './Components/view-all-appointments/view-all-appointments.component'
              ).then((m) => m.ViewAllAppointmentsComponent),
            title: 'ViewAllAppointments',
          },
          {
            path: 'editAppointments',
            loadComponent: () =>
              import(
                './Components/edit-appointments/edit-appointments.component'
              ).then((m) => m.EditAppointmentsComponent),
            title: 'EditAppointments',
          },
        ],
      },

      // Coupons
      {
        path: "coupons", loadComponent: () => import("./Components/coupons/coupons.component").then((m) => m.CouponsComponent),
        children: [
          {
            path: "addCoupons", loadComponent: () => import("./Components/add-coupons/add-coupons.component").then((m) => m.AddCouponsComponent),
            title: "AddCoupons"
          },
          {
            path: "updateCoupons/:id", loadComponent: () => import("./Components/update-coupons/update-coupons.component").then((m) => m.UpdateCouponsComponent),
            title: "UpdateCoupons"
          },
          {
            path: "allCoupons", loadComponent: () => import("./Components/all-coupons/all-coupons.component").then((m) => m.AllCouponsComponent),
            title: "AllCoupons"
          }
        ]


      }
    ],
  },

  // Layout Patient
  {
    path: '', canActivate: [patientsGuard], loadComponent: () => import("./Components/Layout/patient-layout/patient-layout.component").then((m) => m.PatientLayoutComponent), title: "LayoutPatient",
    children: [
      {
        path: '', redirectTo: "Home", pathMatch: "full"

      },
      {
        path: "Home", loadComponent: () => import("./Components/PatAndDocCom/home-patient/home-patient.component").then((m) => m.HomePatientComponent), title: "Home"

      },
      {
        path: "Profile", loadComponent: () => import("./Components/PatAndDocCom/profile-patient/profile-patient.component").then((m) => m.ProfilePatientComponent), title: "Profile"

      },
      {
        path: "Booking", loadComponent: () => import("./Components/PatAndDocCom/booking-patients/booking-patients.component").then((m) => m.BookingPatientsComponent), title: "Booking"

      },
      {
        path: "Department", loadComponent: () => import("./Components/PatAndDocCom/department/department.component").then((m) => m.DepartmentComponent), title: "Department"

      },
      {
        path: "Doctors", loadComponent: () => import("./Components/PatAndDocCom/patient-all-doctors/patient-all-doctors.component").then((m) => m.PatientAllDoctorsComponent), title: "Doctors"

      },
      {
        path: "AllSearchDoctors/:id", loadComponent: () => import("./Components/PatAndDocCom/all-doctor-search/all-doctor-search.component").then((m) => m.AllDoctorSearchComponent), title: "AllDoctors"

      },
      {
        path: "bookDoctor/:id", loadComponent: () => import("./Components/PatAndDocCom/patient-about-doctor/patient-about-doctor.component").then((m) => m.PatientAboutDoctorComponent), title: "BookDoctor"

      },
    ]

  },
  // Layout Doctors
  {
    path: '', canActivate: [doctorsGuard], loadComponent: () => import("./Components/Layout/doctor-layout/doctor-layout.component").then((m) => m.DoctorLayoutComponent), title: "LayoutDoctors",
    children: [
      {
        path: '', redirectTo: "welcome", pathMatch: "full"
      },
      {
        path: "welcome", loadComponent: () => import("./Components/PatAndDocCom/home-doctor/home-doctor.component").then((m) => m.HomeDoctorComponent), title: "Home"

      },
      {
        path: "Book", loadComponent: () => import("./Components/PatAndDocCom/booking-doctor/booking-doctor.component").then((m) => m.BookingDoctorComponent), title: "Booking"

      },
      {
        path: "Appointment", loadComponent: () => import("./Components/PatAndDocCom/appointment-doctor/appointment-doctor.component").then((m) => m.AppointmentDoctorComponent), title: "Appointments"

      },

    ]

  },
  // Doctors + guard true good false go auth
  // Patient + guard true good false go auth
  // Auth all
  {
    path: 'auth',
    loadComponent: () =>
      import('./Components/auth/auth.component').then((m) => m.AuthComponent),
    title: 'Auth',
    children: [
      {
        path: 'loginAdmin',
        loadComponent: () =>
          import('./Components/login/login.component').then(
            (m) => m.LoginComponent
          ),
        title: 'LoginAdmin',
      },
      {
        path: 'loginDoctor',
        loadComponent: () =>
          import('./Components/login-doctor/login-doctor.component').then(
            (m) => m.LoginDoctorComponent
          ),
        title: 'LoginDoctor',
      },
      {
        path: 'loginPatient',
        loadComponent: () =>
          import('./Components/login-patient/login-patient.component').then(
            (m) => m.LoginPatientComponent
          ),
        title: 'LoginAdmin',
      },
      // signup
      {
        path: 'registerPatient',
        loadComponent: () =>
          import('./Components/register/register.component').then(
            (m) => m.RegisterComponent
          ),
        title: 'Register',
      },
    ],
  },



  // Not Found
  {
    path: '**',
    loadComponent: () =>
      import('./Components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    title: 'NotFound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
