const express = require("express");
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtTokens } = require("../utils/jwtHelpers.js");
const UserService = require("../services/UserService");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email= $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      res.status(401).json({ success: false, error: "Email is incorrect" });
    }

    //PASSWORD Check
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ success: false, error: "Incorrect Password!" });
    }
    let tokens = jwtTokens(user.rows[0]);
    res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
    tokens["user_id"] = user.rows[0].user_id;
    return res.json(tokens);

    //Check if user is host
    // const value = await pool.query(
    //   "SELECT isHost FROM users WHERE user_id= $1",
    //   [user.rows[0].user_id]
    // );
    // console.log("AUTH ROUTE: USER VALUE: ", value);
    // if (value.rowCount == 0) {
    //   return { status: 401, success: false, error: "Cant find user!" };
    // }

    // if (value.rows[0].isHost) {
    //   token["role"] = "host";
    // } else {
    //   token["role"] = "traveller";
    // }
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});

router.get("/refreshToken", (req, res) => {
  try {
    const refresh_token = req.cookies.refresh_token;
    if (refresh_token === null)
      return res
        .status(401)
        .json({ success: false, error: "Null refresh token" });
    jwt.verify(
      refresh_token,
      process.env.REFRESH_TOKEN_SECRET,
      (error, user) => {
        if (error) return res.status(403).json({ error: error.message });
        let tokens = jwtTokens(user);
        res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
        console.log(tokens.accessToken);

        res.json(tokens);
      }
    );
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});

router.delete("/refreshToken", (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res
      .status(200)
      .json({ success: true, data: "Refresh token deleted" });
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});

module.exports = router;
