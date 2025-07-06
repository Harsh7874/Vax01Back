import express from 'express';
import { vaccineList, vaccineProfile } from '../controllers/vaccineController.js';
// import { loginHospital, appointmentsHospital, appointmentCancel, hospitalList, changeAvailablity, appointmentsComplete, hospitalDashboard, hospitalProfile, updateHospitalProfile } from '../controllers/hospitalController.js';
// import authDoctor from '../middleware/authDoctor.js';
// import authHospital from '../middleware/authDoctor.js';
const vaccineRouter = express.Router();


vaccineRouter.get("/list", vaccineList)

vaccineRouter.get("/profile", vaccineProfile)


export default vaccineRouter;