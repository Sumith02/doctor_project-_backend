const router = require('express').Router();

const createDoctorLogin = require('../model/doctor_login');
const createVendorReg = require('../model/vendor_reg');
const createMedicineDetails = require('../model/medicine_store');
const registervendor = require('../controller/vendor_reg');
const addMedicine = require('../controller/add_medicine');
const doctorLogin = require('../controller/doctor_login');
const vendorLogin = require('../controller/vendor_login');
const viewMedicine = require('../controller/view_medicine');

router.get("/createdoctordetails", createDoctorLogin);
router.get("/createvendorreg", createVendorReg);
router.get("/createmedicinedetails", createMedicineDetails);
router.get("/viewmedicine", viewMedicine);

router.post("/addmedicine", addMedicine);
router.post("/vendorreg", registervendor);
router.post("/doctorlogin", doctorLogin);
router.post("/vendorlogin", vendorLogin);
module.exports = router;