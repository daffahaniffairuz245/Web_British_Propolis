"use client";

import { useFormik, Form, FormikProvider, getIn } from "formik";
import Link from "next/link";
import * as yup from "yup";
import useAuthModule from "../lib";
import Label from "@/components/label";
import InputText from "@/components/inputText";
import Button from "@/components/Button";
import { RegisterPayload } from "../interface";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2

export const registerSchema = yup.object().shape({
  nama: yup.string().nullable().default("").required("Wajib isi"),
  email: yup
    .string()
    .nullable()
    .default("")
    .email("Gunakan format email")
    .required("Wajib isi"),
  password: yup
    .string()
    .nullable()
    .default("")
    .required("Wajib isi")
    .min(8, "Minimal 8 karakter"),
});

const Register = () => {
  const { useRegister } = useAuthModule();
  const { mutate, isPending } = useRegister(); // ✅ Menggunakan isPending

  const formik = useFormik<RegisterPayload>({
    initialValues: registerSchema.getDefault(),
    validationSchema: registerSchema,
    enableReinitialize: true,
    onSubmit: (payload) => {
      mutate(payload, {
        onSuccess: (response) => {
          Swal.fire({
            title: "Berhasil!",
            text: "Registrasi berhasil, silakan login.",
            icon: "success",
          }).then(() => {
            window.location.href = "/auth/login"; // ✅ Redirect ke halaman login setelah sukses
          });
        },
        onError: (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registrasi gagal! Coba lagi nanti.",
            footer: '<a href="#">Kenapa saya mengalami masalah ini?</a>',
          });
        },
      });
    },
  });

  const { handleChange, handleSubmit, handleBlur, values, errors } = formik;

  return (
    <section className="text-black min-h-screen">
      <div className="flex items-center justify-center w-full">
        <h1 className="text-3xl text-blue-400">Register</h1>
      </div>
      <FormikProvider value={formik}>
        <Form className="space-y-5" onSubmit={handleSubmit}>
          <section>
            <Label htmlFor="nama" title="Nama" />
            <InputText
              value={values.nama}
              placeholder="ihsan"
              id="nama"
              name="nama"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={getIn(errors, "nama")}
              messageError={getIn(errors, "nama")}
            />
          </section>
          <section>
            <Label htmlFor="email" title="Email" />
            <InputText
              value={values.email}
              placeholder="example@email.com"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={getIn(errors, "email")}
              messageError={getIn(errors, "email")}
            />
          </section>
          <section>
            <Label htmlFor="password" title="Password" />
            <InputText
              value={values.password}
              placeholder="**********"
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={getIn(errors, "password")}
              messageError={getIn(errors, "password")}
            />
          </section>
          <section>
            <Button
              height="lg"
              title="Register"
              colorSchema="blue"
              isLoading={isPending}
              isDisabled={isPending}
            />
            <Link href="/auth/login">
              <Button title="Halaman Login" colorSchema="green" />
            </Link>
          </section>
        </Form>
      </FormikProvider>
    </section>
  );
};

export default Register;
