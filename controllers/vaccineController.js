// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import doctorModel from "../models/doctorModel.js";
// import appointmentModel from "../models/appointmentModel.js";
import vaccineModel from "../models/vaccineModel.js";




// API to get all vaccines list for Frontend
const vaccineList = async (req, res) => {
    try {

        const vaccines = await vaccineModel.find({})
        res.json({ success: true, vaccines })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to change doctor availablity for Admin and Doctor Panel


// API to get doctor profile for  Doctor Panel
const vaccineProfile = async (req, res) => {
    try {

        const { vaxId } = req.body
        const profileData = await doctorModel.findById(vaxId)

        res.json({ success: true, profileData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update doctor profile data from  Doctor Panel
// const updateVaccineProfile = async (req, res) => {
//     try {

//         const { vaxId, fees, address, available } = req.body

//         await doctorModel.findByIdAndUpdate(docId, { fees, address, available })

//         res.json({ success: true, message: 'Profile Updated' })

//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }

// API to get dashboard data for doctor panel
// const doctorDashboard = async (req, res) => {
//     try {

//         const { docId } = req.body

//         const appointments = await appointmentModel.find({ docId })

//         let earnings = 0

//         appointments.map((item) => {
//             if (item.isCompleted || item.payment) {
//                 earnings += item.amount
//             }
//         })

//         let patients = []

//         appointments.map((item) => {
//             if (!patients.includes(item.userId)) {
//                 patients.push(item.userId)
//             }
//         })



//         const dashData = {
//             earnings,
//             appointments: appointments.length,
//             patients: patients.length,
//             latestAppointments: appointments.reverse()
//         }

//         res.json({ success: true, dashData })

//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }

export {
    // loginDoctor,
    // appointmentsDoctor,
    // appointmentCancel,
    // doctorList,
    // changeAvailablity,
    // appointmentComplete,
    // doctorDashboard,
    // doctorProfile,
    // updateDoctorProfile

    vaccineList,
    vaccineProfile
}