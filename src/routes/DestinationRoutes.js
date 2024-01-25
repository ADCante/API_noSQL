const router = require("express").Router();
const destinationController = require("../controller/DestinationController");

router.get("/", destinationController.getAllDestination);
router.get("/:id", destinationController.getDestinationsById);
router.post("/", destinationController.createDestination);
router.put("/:id", destinationController.updateDestination);
router.delete("/:id", destinationController.deleteDestination);

module.exports = router;