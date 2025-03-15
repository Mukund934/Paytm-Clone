const express = require("express");
const zod = require("zod");
const router = express.Router();
const jwt = require("jsonwebtoken");

const JWT_SECRET = require("../config");
const { User } = require("../db");

const signupSchema = zod.object({
	username: zod.string(),
	password: zod.string(),
	firstName: zod.string(),
	lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
	const parseResult = signupSchema.safeParse(req.body);
	if (!parseResult.success) {
		return res.status(400).json({
			message: "Incorrect inputs",
			errors: parseResult.error.errors,
		});
	}

	const existingUser = await User.findOne({
		username: req.body.username,
	});

	if (existingUser) {
		return res.status(400).json({
			message: "Email already taken",
		});
	}

	const user = await User.create({
		username: req.body.username,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
	});

	const token = jwt.sign({ userId: user._id }, JWT_SECRET);

	res.json({
		message: "User created successfully",
		token: token,
	});
});



module.exports = router;
