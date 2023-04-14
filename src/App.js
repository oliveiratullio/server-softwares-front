import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useState } from "react";
import NewItemPage from "./pages/ItemPages/NewItemPage";
import EditItemPage from "./pages/ItemPages/EditItemPage";

function App() {
  const [editID, setEditID] = useState('');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage setEditID={setEditID}/>}></Route>
        <Route path="/novo-item" element={<NewItemPage />}></Route>
        <Route path="/editar-item" element={<EditItemPage editID={editID}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
