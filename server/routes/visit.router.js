
const express = require("express");
const router = express.Router();

const visitController = require("../controllers/visit.controller");
const auth = require("../middelware/auth");


router.post("/", visitController.createVisit,auth);
router.get("/", visitController.getVisits);
router.get("/:id",visitController.getVisits)
router.delete("/:id", auth, visitController.deleteVisit);
router.patch("/:id", auth, visitController.updateVisit);

module.exports = router;
