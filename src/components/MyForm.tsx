import React, { useContext, useState } from "react";
import "../assets/style/App.css";
import { AuthContext } from "@/contexts/auth";

interface MyFormStage {
  username: string;
  phone: string;
  email: string;
}
function MyForm() {
  const { user, setUser } = useContext(AuthContext);
  const [formStage, setFormStage] = useState<MyFormStage>({
    username: "",
    phone: "",
    email: "",
  });
  //handleChange (event mengambil object dari element html yang dituju /kolom yang diinput)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);
    setFormStage({ ...formStage, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Halo `, formStage);
    setUser(formStage);
  };
  return (
    <form action="" className="my-form">
      <input
        className="form-input"
        type="text"
        name="username"
        id="username"
        onChange={handleChange}
        placeholder="masukkan nama"
      />
      <input
        className="form-input"
        onChange={handleChange}
        type="text"
        name="phone"
        id="phone"
        placeholder="masukkan nomor hp"
      />
      <input
        className="form-input"
        onChange={handleChange}
        type="text"
        name="email"
        id="email"
        placeholder="masukkan email"
      />
      <button type="submit" className="form-button" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
}

export default MyForm;
