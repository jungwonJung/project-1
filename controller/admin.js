// const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Admin = require("../models/admin");

const MY_SECRET_KEY = "123kladnskldnklsnfgkjs";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bodercoding@gmail.com",
    pass: "codingboder",
  },
});

exports.create = async (request, response, next) => {
  const { email, password } = request.body;

  const admin = new Admin();

  admin.email = email;
  admin.password = password;
  admin.createdAt = Date.now();
  admin.updatedAt = Date.now();

  if (!email || !password) return response.send("모든 항목을 입력해야합니다");

  Admin.findOne({ email }, function (err, results, next) {
    if (results) {
      return response.send("이미 가입되어있는 이메일입니다");
    } else {
      admin.save(function (err) {
        if (err) {
          throw err;
        } else {
          response.send(admin);
        }
        var mailOption = {
          from: "bodercoding@gmail.com",
          to: admin.email,
          subject: "이메일 인증해주세요",
          html:
            "<p>아래의 링크를 클릭해서 인증해주세요!</p>" +
            "<a href='https://jungganzi.xyz/api/confirm/account" +
            "?email=" +
            admin.email +
            " '>인증하기</a>",
        };
        transporter.sendMail(mailOption, function (err, res) {
          // 메일 발송
          if (err) {
            console.log(err);
          } else {
            console.log("이메일발송성공");
          }
          transporter.close();
        });
      });
    }
  });
};

// 로그인
exports.login = async (request, response) => {
  // async 문을 사용해서 콜백함수 바로실행
  const { email, password } = request.body;
  const admin = await Admin.findOne({
    email,
    isAcceptEmail: true,
  });

  if (admin) {
    const comparePassword = await bcrypt.compare(password, admin.password);
    if (comparePassword) {
      // 해시처리된 암호 비교구문
      const token = jwt.sign({ admin: admin._id }, MY_SECRET_KEY, {
        subject: "jwtoken",
        expiresIn: "1440m", // 시간제한
      });
      response.status(200).json({
        token,
        email,
        adminId: admin._id,
      });
    } else {
      response.send("비밀번호가 다릅니다");
    }
  } else {
    response.send("이메일이 다르거나 이메일 인증을 확인해주세요");
  }
};

exports.tokentest = async (request, response) => {
  const token = request.headers.token; // header에서 토큰 받아오기
  const decoded_token = jwt.verify(token, MY_SECRET_KEY); // 생성한토큰 decoded

  if (decoded_token) {
    const admin = await Admin.findOne({ _id: decoded_token.admin }); // 바로 맞는id 데이터찾아오기
    return response.status(200).json({
      email: admin.email,
      adminId: admin._id,
    });
  } else {
    response.status(500).json({
      message: "[에러]서버에 문제가 있어 회원 가입에 실패하였습니다.",
    });
  }
};

// 이메일 인증
exports.confirm = function (request, response) {
  // @ 이 %40 으로 인코딩되는데 디코드 시켜야 swagger 에서도 가능
  const { email } = request.query; // 현재는 링크타고 움직여야함

  Admin.updateOne({ email }, { $set: { isActivedAt: true } }, function (err) {
    if (err) {
      console.log(err);
    } else {
      response.send(
        '<script type="text/javascript">alert("Successfully verified"); window.location="https://jamong-prj.xyz/main"; </script>'
      );
    }
  });
};
