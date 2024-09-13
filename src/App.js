import Transaction from "./compronents/Transaction";
import FormCompronent from "./compronents/FormCompronent";
import "./App.css";
import { useState, useEffect } from "react";
import DataContext from "./data/DataContext";
import Report from "./compronents/Report";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const Titledesign = { color: "black", textAlign: "center", fontSize: 30 };

  const [items, setItems] = useState([]);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense = amounts
      .filter((element) => element < 0)
      .reduce((total, element) => (total += element), 0);
    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);

  return (
    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="container">
        <h1 style={Titledesign}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<Report />}></Route>
              <Route
                path="/insert"
                element={
                  <>
                    <FormCompronent onAddItem={onAddNewItem} />
                    <Transaction items={items} />
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
