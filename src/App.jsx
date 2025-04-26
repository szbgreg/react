import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NotFoundPage from "./NotFoundPage";
import ClockApp from "./ClockApp/components/ClockApp";
import ExpenseApp from "./ExpenseApp/ExpenseApp";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ClockApp />} />
          <Route path="expense" element={<ExpenseApp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
