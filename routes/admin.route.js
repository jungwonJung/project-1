const path = require("path");
const router = express.Router();
const express = require("express");
const adminController = require("../controller/admin.js");
const { validationResult } = require("express-validator");

// 회원가입
router.post(
  "/admin",
  [
    // check("email").isEmail().withMessage("잘못된 이메일 주소입니다"),
    // check("password")
    //   .isLength({ min: 6, max: 15 })
    //   .isAlphanumeric()
    //   .withMessage("비밀번호는 최소 6자에서 최대 15자로 설정해주세요"),
  ],
  (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    const hasError = !error.isEmpty();

    if (hasError) {
      res.send(
        "잘못된 이메일 주소이거나, 비밀번호는 최소 6자에서 최대 15자이고, 영문자가 포함되어야합니다"
      );
    } else {
      next();
    }
  },
  adminController.create
);

//로그인
router.post("/admin/login", adminController.login);

// 토큰 디코드
router.get("/token", adminController.tokentest);

// 이메일인증
router.get("/admin/confirm", adminController.confirm);

module.exports = router;
