# 📚 StudyNotion – EdTech Backend API

StudyNotion is a full-featured EdTech backend system built with **Node.js, Express, MongoDB**, and integrated with **Cloudinary**, **Razorpay**, and email services.
It supports authentication, course management, payments, ratings, user profiles, and instructor dashboards.

---

# 🚀 Features

## 🔐 Authentication & Authorization

- User Signup with OTP email verification
- Secure Login with JWT
- Role-based access control (Admin / Instructor / Student)
- Password reset via email token
- Protected routes middleware

## 👤 User & Profile

- Update profile details
- Upload display picture (Cloudinary)
- View enrolled courses
- Instructor dashboard (earnings + students)
- Delete account (cascade cleanup)

## 📘 Course Management

- Create, edit, delete course (Instructor only)
- Add sections & subsections
- Upload videos (Cloudinary)
- Draft & Published course states
- Course progress tracking

## ⭐ Ratings & Reviews

- Students can rate enrolled courses
- Average rating calculation (Aggregation Pipeline)
- Fetch all reviews

## 💳 Payments (Razorpay Integration)

- Capture payments
- Verify payment signature
- Enroll students after payment
- Payment success email
- Course enrollment email

## 📂 Categories

- Create category (Admin only)
- View all categories
- Category-wise course filtering
- Top-selling courses logic

---

# 🏗️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Cloudinary (Media Storage)**
- **Razorpay (Payments)**
- **Nodemailer (Email Service)**
- **Express File Upload**

---

# 📁 Project Structure

```
StudyNotion/
│
├── config/
│   ├── database.js
│   ├── cloudinary.js
│   └── razorpay.js
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── mail/
├── utils/
│
├── .env
├── server.js
└── package.json
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000

MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FOLDER_NAME=StudyNotion

RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password

FRONTEND_URL=https://your-frontend-url.com
```

⚠️ Never commit `.env` to GitHub.

---

# 🛠️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <repository-url>
```

- note : add project repository url

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create `.env` file and add required keys.

### 4️⃣ Start Development Server

```bash
npm run dev
```

or

```bash
node server.js
```

Server runs at:

```
http://localhost:5000
```

---

# 🔐 Authentication Flow

1. User signs up
2. OTP sent via email
3. OTP verification
4. JWT token generated
5. Protected routes accessible using:

   ```
   Authorization: Bearer <token>
   ```

---

# 💳 Payment Flow

1. Student selects courses
2. Backend creates Razorpay order
3. Payment verification
4. Student enrolled
5. Enrollment email sent
6. CourseProgress document created

---

# 📊 Instructor Dashboard

Provides:

- Total students enrolled
- Total revenue generated per course

---

# 📦 API Base Routes

| Module  | Base Route        |
| ------- | ----------------- |
| Auth    | `/api/v1/auth`    |
| Profile | `/api/v1/profile` |
| Course  | `/api/v1/course`  |
| Payment | `/api/v1/payment` |
| Contact | `/api/v1/reach`   |

---

# 🔒 Role-Based Access

| Role       | Permissions                  |
| ---------- | ---------------------------- |
| Admin      | Create categories            |
| Instructor | Create & manage courses      |
| Student    | Enroll, Rate, Track progress |

---

# 🧠 Advanced Concepts Used

- MongoDB Aggregation Pipeline
- JWT Middleware Authentication
- Pre-save hooks (OTP email trigger)
- HMAC signature verification (Razorpay)
- Dynamic population (Nested populate)
- Course duration calculation
- Progress percentage calculation

---

# 🧪 Future Improvements

- Refresh tokens
- Payment webhook verification
- Course search & filtering
- Pagination
- Caching
- Swagger API documentation
- Unit testing (Jest)

---

# 📄 License

This project is open-source and available under the MIT License.

---

# 👨‍💻 Author

Built as a complete EdTech backend system demonstrating:

- Authentication
- Payments
- Media upload
- Scalable REST architecture
- Production-ready backend patterns

---
