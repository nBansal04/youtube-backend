import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
// to accept and limit the size of json, its one of security best practice to avoid crashing server

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public")); // to store temp files
app.use(cookieParser());

export { app }