import express from 'express';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { AcademicDepartmentRoutes } from '../modules/AcademicDepartment/academicDepartment.route';
import { AcademicFacultyRoutes } from '../modules/AcademicFaculty/academicFaculty.route';
import { CourseRoutes } from '../modules/Course/Course.route';
import { offeredCourseRoutes } from '../modules/OfferedCourse/OfferedCourse.route';
import { offeredCourseClassScheduleRoutes } from '../modules/OfferedCourseClassSchedule/OfferedCourseClassSchedule.route';
import { offeredCourseSectionRoutes } from '../modules/OfferedCourseSection/OfferedCourseSection.route';
import { roomRoutes } from '../modules/Room/Room.route';
import { semesterRegistrationRoutes } from '../modules/SemesterRegistration/SemesterRegistration.route';
import { studentEnrolledCourseMarkRoutes } from '../modules/StudentEnrolledCourseMark.controller.ts/StudentEnrolledCourseMark.route';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoute
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/courses',
    routes: CourseRoutes
  },
  {
    path: '/offered-courses',
    routes: offeredCourseRoutes
  },
  {
    path: '/offered-course-class-schedule',
    routes: offeredCourseClassScheduleRoutes
  },
  {
    path: '/offered-course-sections',
    routes: offeredCourseSectionRoutes
  },
  {
    path: '/rooms',
    routes: roomRoutes
  },
  // {
  //   path: '/semester-registrations',
  //   route: semesterRegistrationRoutes
  // },
 {
  path:"/student-enrolled-course-marks",
  routes : studentEnrolledCourseMarkRoutes
 }, 
 
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
