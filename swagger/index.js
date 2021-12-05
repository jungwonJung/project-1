/**
 * @swagger
 * tags:
 *   - name: Admin
 *   - name: Stuff
 */
/**
 * @swagger
 *  paths:
 *    /admin:
 *      post:
 *        tags:
 *        - "Admin"
 *        summary: ""
 *        description: "관리자 회원 가입 API, 사용자 E-mail, Password 2개를 입력해야 합니다."
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "data"
 *          description: ""
 *          properties:
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *        responses:
 *          200:
 *            description: "[완료]가입이 정상적으로 완료되었습니다."
 *          409:
 *            description: "[에러]사용자 아이디가 이미 존재하여 회원 가입이 실패하였습니다."
 *          500:
 *            description: "[에러]서버에 문제가 있어 회원가입에 실패하였습니다."
 */
/**
 * @swagger
 *  paths:
 *    /admin/login:
 *      post:
 *        tags:
 *        - "Admin"
 *        summary: ""
 *        description: "로그인 API 관리자의 Email 아이디와 암호를 입력해야 합니다."
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "data"
 *          description: ""
 *          required: true
 *          schema:
 *            properties:
 *                email:
 *                    type: string
 *                password:
 *                    type: string
 *        responses:
 *          200:
 *            description: "[완료]로그인이 완료되었습니다"
 *          409:
 *            description: "[에러]비밀번호가 맞지 않아 로그인에 실패하였습니다"
 *          500:
 *            description: "[에러]서버에 문제가 있어 로그인하지 못했습니다"
 */
/**
 * @swagger
 *  paths:
 *    /token:
 *      get:
 *        tags:
 *        - "Admin"
 *        summary: ""
 *        description: "토큰 디코드 테스트 api (실제유효한 유저가 맞는지 확인)"
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "header"
 *          name: "token"
 *          description: "jwt Token"
 *          required: true
 *          schema:
 *            type: string
 *        responses:
 *          200:
 *            description: "[완료]가입이 정상적으로 완료되었습니다."
 *          409:
 *            description: "[에러]사용자 아이디가 이미 존재하여 회원 가입이 실패하였습니다."
 *          500:
 *            description: "[에러]서버에 문제가 있어 회원 가입에 실패하였습니다."
 */
/**
 * @swagger
 *  paths:
 *    /admin/get:
 *      get:
 *        tags:
 *        - "Admin"
 *        summary: ""
 *        description: "토큰 기반 사용자 데이터 조회"
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "header"
 *          name: "token"
 *          description: "jwt Token"
 *          required: true
 *          schema:
 *            type: string
 *        responses:
 *          200:
 *            description: "[완료]가입이 정상적으로 완료되었습니다."
 *          409:
 *            description: "[에러]사용자 아이디가 이미 존재하여 회원 가입이 실패하였습니다."
 *          500:
 *            description: "[에러]서버에 문제가 있어 회원 가입에 실패하였습니다."
 */
/**
 * @swagger
 *  paths:
 *    /admin/confirm:
 *      get:
 *        tags:
 *        - "Admin"
 *        summary: ""
 *        description: "이메일 인증 api"
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "query"
 *          name: "email"
 *          description: "계정 email"
 *          required: true
 *          schema:
 *            type: string
 *        responses:
 *          200:
 *            description: "[완료]이메일 인증이 완료되었습니다"
 */
