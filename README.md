# 🔢 Number Classification API

## 📌 Project Description

The **Number Classification API** is an API that takes a number and returns its mathematical properties along with a fun fact. It is built using **Node.js** and **Express.js**.

### 🛠 Features

- Identifies whether a number is **Prime**, **Perfect**, **Armstrong**, **Even/Odd**.
- Calculates the **sum of digits**.
- Fetches a **fun fact** about the number using the [Numbers API](http://numbersapi.com/).
- Supports **CORS (Cross-Origin Resource Sharing)**.
- Returns JSON responses.

---

## ⚙️ Setup Instructions

### **1️⃣ Clone the Repository**

```sh
git clone [project_repo](https://github.com/darionnuel/Number_Classification_API.git)
cd Number_Classification_API
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Run the Server Locally**

The server will start on <http://localhost:3000>

```sh
node server.js
```

---

## 🌐 API Usage

### **Endpoint**

```sh
GET /api/clasify-number?number={number}
```

Replace {number} with any valid integer.

### **✅ Example Request**

```sh
GET https://number-classification-api-pba7.onrender.com/api/classify-number?number=153
```

### **📥 Success Response(200 OK)**

```json
{
  "number": 153,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 9,
  "fun_fact": "153 is a narcissistic number."
}
```

### **❌ Error Response(400 Bad Request)**

```json
{
  "number": "abc",
  "error": true
}
```

---

## **🚀 Deployment**

TODO
The API is live at: 🔗[Number_Classification_API](https://number-classification-api-pba7.onrender.com/api/classify-number?number=153)

This API is deployed using Render.

---

## **📜 Project Structure**

```php
number_classification_api/
│── package.json
│── server.js
│── utils/
│ ├── mathUtils.js # Math logic helper functions
│ ├── fetchFunFact.js # API call to Numbers API
│── routes/
│ ├── classifyNumber.js # Express route handling
│── middlewares/
│ ├── validateInput.js # Middleware for validation
│── README.md
```

---

## **🔨 Built With**

- Node.js 🟢
- Express.js 🚀
- Axios (For external API calls)
- CORS (For cross-origin support)

## **📢 Hire Me**

👨‍💻 Need a Node.js Developer? Contact me!
🔗 <emmanueloguneko@gmail.com>
