"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

// Extend the Session type to include the role property
declare module "next-auth" {
    interface Session {
        role?: string;
    }
}
import Label from "@/components/label";
import useBookModule from "../../lib";
import { Form, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { useRouter } from "next/navigation";
import { BookCreatePayload } from "../../interface";
import Button from "@/components/Button";
import InputText from "@/components/inputText";

const createBookSchema = Yup.object().shape({
    title: Yup.string()
        .nullable()
        .default("")
        .matches(/[a-z]/, "Title harus mengandung huruf kecil")
        .matches(/[A-Z]/, "Title harus mengandung huruf besar")
        .required("Wajib di isi"),
    author: Yup.string().nullable().default("").required("Wajib di isi"),
    year: Yup.number()
        .nullable()
        .default(undefined)
        .required("Wajib di isi"),
    deskripsi: Yup.string().nullable().default(""),
});

export default function Update({ params }: { params: { id: string } }) {
    const { useDetailBook } = useBookModule();
    const { useUpdateBook } = useBookModule();
    const router = useRouter();
    const { data: session } = useSession(); // Mengambil sesi pengguna
    const mutate = useUpdateBook(params.id);
    const { data, isFetching } = useDetailBook(params.id);

    // Validasi akses berdasarkan role
    useEffect(() => {
        if (session?.role === "user") {
            router.push("/access"); // Redirect jika role adalah user
        }
    }, [session, router]);

    const formik = useFormik<BookCreatePayload>({
        initialValues: {
            title: data?.title || "",
            author: data?.author || "",
            year: data?.year || "",
            deskripsi: data?.deskripsi || "",
        },
        validationSchema: createBookSchema,
        enableReinitialize: true,
        onSubmit: (values, { setErrors, resetForm, setValues }) => {
            mutate.mutate(values, {
                onSuccess: () => {
                    resetForm();
                    setValues(createBookSchema.getDefault());
                    router.push('/book');
                },
                onError: (error: any) => {
                    if (error.response?.data?.message) {
                        const backendErrors: Record<string, string> = {};
                        error.response.data.message.forEach((msg: string) => {
                            if (msg.includes("year")) {
                                backendErrors.year = msg;
                            }
                        });
                        setErrors(backendErrors);
                    }
                },
            });
        },
    });

    const { handleChange, handleSubmit, handleBlur, values, errors } = formik;

    if (isFetching) return <p>Loading...</p>;

    console.log("data detail", data);
    return (
        <section className="flex items-center flex-col justify-center w-full h-full text-black">
            <h2>Update Buku</h2>
            <FormikProvider value={formik}>
                <Form className="space-y-5 " onSubmit={handleSubmit}>
                    <section>
                        <Label htmlFor="title" title="Judul" />
                        <InputText  
                            id="title" 
                            name="title" 
                            value={values.title}
                            placeholder="Judul buku"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isError={!!errors.title}
                            messageError={errors.title}
                        />
                    </section>
                    <section>
                        <Label htmlFor="author" title="Penulis Buku" />
                        <InputText 
                            id="author"  
                            name="author"  
                            value={values.author}
                            placeholder="Nama penulis"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isError={!!errors.author}
                            messageError={errors.author}
                        />
                    </section>
                    <section>
                        <Label htmlFor="year" title="Tahun" />
                        <InputText 
                            id="year" 
                            name="year" 
                            value={values.year}
                            placeholder="Masukkan tahun"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isError={!!errors.year}
                            messageError={errors.year} 
                        />
                    </section>
                    <section>
                        <Label htmlFor="deskripsi" title="Deskripsi" />
                        <InputText 
                            id="deskripsi" 
                            name="deskripsi" 
                            value={values.deskripsi}
                            placeholder="Deskripsi buku"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isError={!!errors.deskripsi}
                            messageError={errors.deskripsi}
                        />
                    </section>
                    <section>
                        <Button title="Simpan" colorSchema="blue" variant="solid" type="submit" isLoading={mutate.status === "pending"} />
                    </section>
                </Form>
            </FormikProvider>
        </section>
    );
}
