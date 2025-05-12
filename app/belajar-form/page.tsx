"use client"; // gunakan use client karena ada onChange pda komponen
import Button from "@/components/Button";
import InputText from "@/components/inputText";
import Label from "@/components/labelform";
import Select from "@/components/select";

import { ChangeEvent, useState } from "react";

 
interface Value {
  title: string;
  author: string;
  year: number | string;
  deskripsi: string;
}
 
const Home = () => {
  const [values, setValues] = useState<Value>({
    title: "",
    author: "",
    year: "",
    deskripsi: "",
  });
  const [errors, setErrors] = useState<{[key : string]: string}>({})

 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: ChangeEvent<any>) => {
    const { name, value } = event.target;
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name] : value
      };
    });
    if (value.trim !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "Wajib Diisi",
      }));
    }

    if(errors[name]) {
        setErrors((prevErrors) =>  ({...prevErrors, [name] : ""}))
      }
     
  };
 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: ChangeEvent<any>) => {
    e.preventDefault();
    
    if (!values.title || !values.author || !values.deskripsi || !values.year) {
        alert("Lengkapi Form");
    } else {
        alert(JSON.stringify(values));
      }

  };

  
 
  return (
    <main className="space-y-5">
      {JSON.stringify(values)}
      <h1 className="text-red-500 font-bold">Latihan Form</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <section>
          <Label htmlFor="author" isRequired title="Penulis" />
          <InputText
            placeholder="Nama Penulis buku"
            isError={!values.title}
            id="author"
            name="author"
            value={values.author}
            onChange={handleChange}
          />
        </section>
 
        <section>
          <Label htmlFor="title" isRequired title="Judul Buku" />
          <InputText
            placeholder="Nama Judul buku"
            id="title"
            isError={!values.title}
            name="title"
            value={values.title}
            onChange={handleChange}
          />
        </section>
        <section>
          <Label htmlFor="deskripsi" isRequired title="deskripsi" />
          <InputText
            placeholder="deskripsi"
            id="deskripsi"
            isError={!values.deskripsi}
            name="deskripsi"
            value={values.deskripsi}
            onChange={handleChange}
          />
        </section>
        <section>
          <Label htmlFor="year" title="Tahun Terbit" isRequired={false} />
          <Select
            value={values.year}
            name="year"
            onChange={handleChange}
            isError={!values.year}
            id="year"
            options={[
              {
                value: 2020,
                label: "2020",
              },
              {
                value: 2021,
                label: "2021",
              },
              {
                value: 2022,
                label: "2022",
              },
              {
                value: 2023,
                label: "2023",
              },
            ]}
          />
        </section>
        <section>
          <Button type="submit" colorSchema="blue" title="Simpan" />
        </section>
      </form>
    </main>
  );
};
 
export default Home;