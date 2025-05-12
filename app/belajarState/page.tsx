"use client";
import { ChangeEvent, useState } from "react";

export default function App() {
  // const [count, setCount] = useState(0);
  // const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // const [identitas, setidentitas] = useState({
  //   nama : "hardi",
  //   kelas : "XI RPL",
  //   alamat : ""
  // })

  interface identitas {
    nama: string;
    kelas: string;
    alamat?: string; 
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [identitas, setidentitas] = useState<identitas[]>([

    // {
    //   nama: "hardi",
    //   kelas: "XI RPL",
    //   alamat: "",
    // },
    // {
    //   nama: "fahkri",
    //   kelas: "X RPL",
    //   alamat: "bekasi",
    // },
  ]);
  const handle_event = () => {
    setidentitas((i) => {
      return [...i,
        {
    nama: "hardi",
    kelas: "XI RPL",
    alamat: "",
  },
  {
    nama: "fahkri",
    kelas: "X RPL",
    alamat: "bekasi",
  },
  {
    nama: "abqory",
    kelas: "X RPL",
    alamat: "bekasi",
  },
      ]
    }
  )}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [name,setname] = useState("")

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const  handlechange = (event : ChangeEvent<any>) => {
    console.log('value', event.target.value);
    console.log('name', event.target.name);
    console.log('placeholder', event.target.placeholder);
    console.log('id', event.target.id);
    setname(event.target.value);
  }

  const handlesubmit = (id: number) => {
    console.log("id", id);  
  }
    
  
  return (
    <>


    <div className=" flex flex-col gap-10">
      { identitas.length === 0 ? (
        <p>data tidak ditemukan</p>
      ) : (
        identitas.map((items, index) => {
          return (
            <div key={index} className=" flex flex-col gap-10 border rounded-md p-4">
              <span>Nama : {items.nama}</span>
              <span>kelas : {items.kelas}</span>
              <span> alamat : {items.alamat}</span>
            </div>
          )
        })
      )}
      <button onClick={handle_event} > tambah</button>
      <button onClick={()=>{
        handlesubmit(199);
      }} className="rounded-md bg-green-600 px-5 py-4 " > tambah angka</button>
      <input id="test123" value={name} placeholder="123" name="tes" onChange={handlechange} className=" border p-2 w-full rounded-md text-black" />
      <input id="test123" value={name} placeholder="123" name="tes" onChange={handlechange} className=" border p-2 w-full rounded-md text-black" />
    </div>


      {/* <h1>Hello World</h1>

      <h2>nama : {identitas.nama}</h2>
      <h2>nama : {identitas.kelas}</h2>
      <h2>nama : {identitas.alamat || "-"}</h2>

      <input className=" border p-2 rounded-md flex gap-20 " onChange={(i) => {
        setidentitas((prevState) => {
            return {
                ...prevState,
                nama : i.target.value,
                alamat : "bogor"
            }
        })
      } } 
      
      />

<input className=" border p-2 rounded-md " onChange={(i) => {
        setidentitas((prevState) => {
            return {
                ...prevState,
                kelas : i.target.value,
                alamat : "bekasi"
            }
        })
      } } 
      
      />






      {JSON.stringify(number)}

      <button
        title="tambah"
        className="px-4 py-5 bg-green-500 "
        onClick={() => {
          setNumber((prevstate) => {
            const lastnumber = prevstate[prevstate.length -1]
            return [...prevstate,lastnumber +1];
          });
        }}
      >
        tambah
      </button>

      <button
        title="hapus"
        className="px-4 py-5 bg-green-500"
        onClick={() => {
            
          setNumber((prevstate) => {
            const lastnumber = prevstate[prevstate.length -1]
            return [...prevstate,lastnumber -1];
          });
        }}
      >
        hapus
      </button>

      <div className="text-xl text-red-500">{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}


      






    </>
  );
}
