const router = require('express').Router();

const createDoctorLogin = require('../model/doctor_login');
const createVendorReg = require('../model/vendor_reg');
const createMedicineDetails = require('../model/medicine_store');


const registervendor = require('../controller/vendor_reg');
const addMedicine = require('../controller/add_medicine');
const doctorLogin = require('../controller/doctor_login');
const vendorLogin = require('../controller/vendor_login');


const viewMedicine = require('../controller/view_medicine');
const viewAntsipetic = require('../controller/view_antsipetic');
const viewInjection = require('../controller/view_injection');
const viewLotion = require('../controller/view_lotion');
const viewOralRinse = require('../controller/view_oralRinse');
const viewPills = require('../controller/view_pills');
const viewPowder = require('../controller/view_powder');
const viewSpray = require('../controller/view_spray');
const viewSolution = require('../controller/view_soloution');

const searchQuery = require('../controller/search_query');
const countVendors = require('../controller/count_vendors');
const countMedicine = require('../controller/count_medicines');
const viewprofile = require('../controller/viewprofile');
const CountMedicineithinWeek = require('../controller/count_medicine_within_week');
const totalAmount = require('../controller/expenditure');

const CountTablet = require('../controller/count_tablets');
const CountAntisptic = require('../controller/count_antisptic');
const CountLotion = require('../controller/count_lotion');
const CountOralrinse = require('../controller/count_oralrinse');
const CountPills = require('../controller/count_pills');
const CountPowder = require('../controller/count_powder');
const CountSolution = require('../controller/count_soluation');
const CountSpray = require('../controller/count_spray');

router.get("/createdoctordetails", createDoctorLogin);
router.get("/createvendorreg", createVendorReg);
router.get("/createmedicinedetails", createMedicineDetails);

router.get("/viewmedicine", viewMedicine);
router.get("/viewantisptic", viewAntsipetic);
router.get("/viewinjection", viewInjection);
router.get("/viewlotion", viewLotion);
router.get("/vieworalrinse", viewOralRinse);
router.get("/viewpills", viewPills);
router.get("/viewpowder", viewPowder);
router.get("/viewspray", viewSpray);
router.get("/viewsolution", viewSolution);

router.get("/totalamt", totalAmount);
router.get("/vendorcount", countVendors);
router.get("/medicinecount", countMedicine);
router.get("/withinweek", CountMedicineithinWeek);

router.get("/counttablet", CountTablet);
router.get("/countantsptic", CountAntisptic);
router.get("/countlotion", CountLotion);
router.get("/countoral", CountOralrinse);
router.get("/countpills", CountPills);
router.get("/countpowder", CountPowder);
router.get("/countsolution", CountSolution);
router.get("/countspray", CountSpray);

router.post("/searchquery", searchQuery);
router.post("/addmedicine", addMedicine);
router.post("/vendorreg", registervendor);
router.post("/doctorlogin", doctorLogin);
router.post("/vendorlogin", vendorLogin);
router.get("/viewprofile", viewprofile);

module.exports = router;