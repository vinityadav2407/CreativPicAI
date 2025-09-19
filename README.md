# 🎨 CreativPicAI  

CreativPicAI is an AI-powered SaaS web application that converts **text prompts into images** using the [ClipDrop API](https://clipdrop.co/apis).  
It also includes a **credit-based system** where users can purchase credits through **Razorpay payment gateway** to generate images.  

---

## 🚀 Features  

- 🖌️ **AI Image Generation** — Enter any prompt, and generate high-quality AI images with ClipDrop.  
- 💳 **Credits System** — Users are assigned credits which are deducted on each image generation.  
- 🛒 **Razorpay Integration** — Purchase more credits securely using Razorpay API.  
- 🔑 **Authentication & Authorization** (JWT-based).  
- 📊 **Transaction Management** — Track payment and credit usage.  
- ⚡ **Responsive UI** with modern frontend.  

---

## 🛠️ Tech Stack  

### **Frontend (client)**
- React.js  
- Tailwind CSS  
- Axios  

### **Backend (server)**
- Node.js  
- Express.js  
- MongoDB (Mongoose ORM)  

### **External APIs**
- [ClipDrop API](https://clipdrop.co/apis) → AI image generation  
- [Razorpay API](https://razorpay.com/docs/api) → Payments  

---

## 📂 Project Structure  

CreativPicAI_SaaSApp/
│── client/ # React frontend
│── server/ # Node.js + Express backend
│ │── controllers/ # API controllers
│ │── models/ # MongoDB models
│ │── routes/ # API routes
│ │── .env # Environment variables (ignored by git)
│── README.md # Project documentation

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/vinityadav2407/CreativPicAI.git
cd CreativPicAI_SaaSApp
```
### 2️⃣ Install dependencies

For backend
```bash
cd server
npm install
```
For frontend
```bash
cd ../client
npm install
```
### 3️⃣ Setup Environment Variables

Create .env files inside both server/ and client/ directories.

Example server/.env

```base
PORT=4000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret

# Razorpay
RAZORPAY_KEY_ID='your-razorpay-key'
RAZORPAY_SECRET='your-razorpay-secret'

# ClipDrop
CLIPDROP_API='your-clipdrop-api-key'

JWT_SECRET='XYZ'
MONGODB_ATLAS_URL='mongodb+srv://XYZ'
CURRENCY="INR"

```

Example client/.env
```base

VITE_BACKEND_URL='http://localhost:4000'
VITE_RAZORPAY_KEY_ID='your-razorpay-key'

```
### 4️⃣ Run the application

Start backend
``` base
cd server
node .\server.js 
```

Start frontend
```base
cd ../client
npm run dev
```
## 💡 Usage

- Register/Login to the platform.

- Enter a prompt and generate an AI-powered image.

- Credits are deducted for each image.

- If credits run out, use Razorpay to purchase  more.

## 📸 Screenshots 

(i can add screenshots/gifs of your app UI here later.)

## 🔒 Security Notes

- .env files are ignored from Git for safety.

- Always use test keys for development.

- Do not commit your real API keys to GitHub.
## ✨ Future Improvements

- Add user profiles & history of generated images.

- Support for multiple AI APIs (OpenAI, Stability AI, etc.).

- Advanced payment features (subscriptions, coupons).

- Export images in multiple formats.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit pull requests.
## 📜 License

This project is licensed under the MIT License.

---


