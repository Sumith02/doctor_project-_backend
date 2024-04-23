const router = require('express').Router();

const createDoctorLogin = require('../model/doctor_login');
const createVendorReg = require('../model/vendor_reg');
const createMedicineDetails = require('../model/medicine_store');
const registervendor = require('../controller/vendor_reg');
const addMedicine = require('../controller/add_medicine');
const doctorLogin = require('../controller/doctor_login');
const vendorLogin = require('../controller/vendor_login');
const viewMedicine = require('../controller/view_medicine');
const searchQuery = require('../controller/search_query');
const countVendors = require('../controller/count_vendors');
const countMedicine = require('../controller/count_tablets');
const viewprofile = require('../controller/viewprofile');
const CountMedicineithinWeek = require('../controller/count_medicine_within_week');
const totalAmount = require('../controller/expenditure');

router.get("/createdoctordetails", createDoctorLogin);
router.get("/createvendorreg", createVendorReg);
router.get("/createmedicinedetails", createMedicineDetails);
router.get("/viewmedicine", viewMedicine);
router.get("/totalamt", totalAmount);
router.get("/vendorcount", countVendors);
router.get("/medicinecount", countMedicine);
router.get("/withinweek", CountMedicineithinWeek);

router.post("/searchquery", searchQuery);
router.post("/addmedicine", addMedicine);
router.post("/vendorreg", registervendor);
router.post("/doctorlogin", doctorLogin);
router.post("/vendorlogin", vendorLogin);
router.get("/viewprofile", viewprofile);

module.exports = router;