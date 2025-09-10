# Country Info App

An Angular application that displays information about countries and their public holidays.  
Powered by the [Nager.Date API](https://date.nager.at/swagger/index.html).

## 🚀 Features

- Search for countries by name.
- View public holidays for a selected country.
- Random countries widget showing the next holiday for 3 random countries.
- Year switching (2020–2030) for the holiday list.
- Navigation between Home and Country pages.
- ESLint + Prettier for code quality and formatting.

## 🛠️ Tech Stack

- Angular 17+
- Angular Router
- TypeScript
- ESLint + Prettier
- Bootstrap / Angular Material (optional for styling)

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/country-info.git
   cd country-info
   ```
2. Install dependencies
    ```bash
   npm install
   ```
3. Create a .env file in the root directory
    ```bash
   NG_APP_API_BASE_URL=https://date.nager.at/api/v3
   ```
4. Run the development server
    ```bash
   npm start
   ```
5. Build for production
    ```bash
   npm run build
   ```

## 📂 Project Structure
src/
 ├─ app/
 │   ├─ pages/
 │   │   ├─ home/ 
 │   │   ├─ header/ 
 │   │   └─ country/ 
 │   ├─ services/
 │   │   └─ country.service.ts
 │   ├─ app.component.ts
 │   └─ app.routes.ts
 └─ environment/
     └─ environment.ts

## ✅ Code Quality
- Lint check
- Auto format

## 🚀 Future Improvements
- Add caching for API requests.
- Improve UI with Angular Material cards and tables.
- Add unit tests for services and components.
- Add CI/CD pipeline for lint, test, and build checks.

