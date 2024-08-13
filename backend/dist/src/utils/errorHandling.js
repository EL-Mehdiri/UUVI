"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging
    res.status(500).json({
        message: "An unexpected error occurred. Please try again later.",
        error: err.message, // Optional: Include the error message for debugging
    });
};
exports.globalErrorHandler = globalErrorHandler;
