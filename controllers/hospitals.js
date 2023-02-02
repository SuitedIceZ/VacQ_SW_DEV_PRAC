
// @desc    Get all hospitals
// @route   GET /api/v1/hospitals
// @access  Public
exports.getHospitals = async (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: "Show all hospitals"
    });
};

// @desc   Get single hospital
// @route   GET /api/v1/hospitals/:id
// @access  Public
exports.getHospital = async (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Show hospital ${req.params.id}`
    });
}

// @desc   Create new hospital
// @route   POST /api/v1/hospitals
// @access  Public
exports.createHospital = async (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: "Create new hospital"
    });
}

// @desc   Update hospital
// @route   PUT /api/v1/hospitals/:id
// @access  Public
exports.updateHospital = async (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update hospital ${req.params.id}`
    });
}

// @desc   Delete hospital
// @route   DELETE /api/v1/hospitals/:id
// @access  Public
exports.deleteHospital = async (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete hospital ${req.params.id}`
    });
}
