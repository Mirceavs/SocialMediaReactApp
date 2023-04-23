import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import multer from 'multer';
import path from "path";
import { fileURLToPath } from 'url';

// Configurations
const __filename = fileURLToPath(import.meta.url);
