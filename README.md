# AngularApplication
This is a simple **Angular 17** e-commerce-style frontend application built using Angular CLI version 17.2.0. It demonstrates core Angular concepts such as routing, services, components, and data handling without a backend. Data is managed locally within a service file

---
## 🔗 Live Links

-  **GitHub Repository**: [KishoreSolairaj/AngularApplication](https://github.com/KishoreSolairaj/AngularApplication.git)  
- **LinkedIn Profile**: [Kishore Solairaj](https://www.linkedin.com/in/kishoresolairaj/)

---

##  Features

-  User **Registration** Page
-  **Login** Page with basic form validation
-  **Product List** View with mock data
-  **Product Description** Page (details of selected product)
-  **Cart Page** to review selected products
-  Data handled via a local Angular service (no backend)

---

##  Tech Stack

- **Angular 17**
- **TypeScript**
- **SCSS / CSS**
- **RxJS**
- **Angular CLI**

---

## Project Structure

```
src/
│
├── app/
│ ├── services/ # Data service managing product/user/cart info
│ │── customDerectives
│ │── model
│ ├── components/
│ │ ├── register/
│ │ ├── login-page/
│ │ ├── products/
│ │ ├── product-description/
│ │ ├── cart/
│ │ ├── header/
│ │ └── page-not-found/
│ │── app.component.css
│ │── app.component.html
│ │── app.component.ts
│ │── app.config.server.ts
│ │── app.config.ts
│ │── app.module.ts
│ └── app.routes.ts
│
├── assets/ # Static files
└── index.html # Main HTML file
```

---

## ⚙️ Getting Started

Follow these steps to run the application locally:

### 1. Clone the Repository

git clone https://github.com/KishoreSolairaj/AngularApplication.git
cd AngularApplication 

### 2. Install Angular CLI (if not already installed)
You need the Angular CLI to run and build the application. Install it globally using: npm install -g @angular/cli
You can verify the installation with: ng version

### 3. Install Dependencies
Make sure you have Node.js and Angular CLI installed. Then run: npm install

### 4. Run the Development Server
To run the application: ng serve
