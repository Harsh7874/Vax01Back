// const express = require('express');
// const router = express.Router();
// const HospitalVaccine = require('../models/HospitalVaccine');
// const quantityModel  = require ("../models/hospitalQuantModel")
// const hospitalModel = require('../models/hospitalModel');
import express from 'express';

import quantityModel from "../models/hospitalQuantModel.js";
// import { Router } from "express";
const quantityRouter = express.Router();


// Get vaccine inventory for the authenticated hospital
quantityRouter.get('/listing',  async (req, res) => {
    try {
        const hospitalId = req.hospitalId; // Set by verifyToken middleware
        const vaccines = await quantityModel.find({hospital : hospitalId }).populate('vaccine');
        res.json({ success: true, vaccines });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// module.exports = quantityRouter;
export default quantityRouter