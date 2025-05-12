import { useQuery, useMutation , useQueryClient } from "@tanstack/react-query";
import {
  BookCreatePayload,
  BookListFilter,
  BookListResponse,
  DetailBookResponse,
} from "./interface";
import { axiosClient } from "@/lib/axiosClient";
import { ChangeEvent, useState } from "react";
import { pages } from "next/dist/build/templates/app-page";
import Swal from "sweetalert2";


const useBookModule = () => {

  //delete bulk
  const useDeleteBulkBook = () => {
    const queryClient = useQueryClient();
  
    const mutate = useMutation({
      mutationFn: (ids: number[]) => axiosClient.post(`/book/delete-bulk`, { ids }),
      onSuccess: (res: any) => {
        console.log("Berhasil menghapus buku secara bulk");
        queryClient.invalidateQueries({queryKey :["/book/list"]});
        Swal.fire({
          title: "Berhasil!",
          text: "Buku yang dipilih telah dihapus.",
          icon: "success",
        });
      },
      onError: (err) => {
        console.log("Gagal menghapus buku secara bulk");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Terjadi kesalahan saat menghapus buku!",
        });
      },
    });
  
    return mutate;
  };
  

  //detail
  const getDetailBook = async (
    id:string
  ): Promise<DetailBookResponse> => {
    return axiosClient.get(`/book/detail/${id}`).then((res) => res.data.data);
  };
  
  const useDetailBook = (id:string) => {
    const { data, isLoading, isFetching } = useQuery(
     {
      queryKey: ["/book/detail", { id }],
      queryFn: () => getDetailBook(id),
      select: (response: any) => response,
     }
    );
  
    return { data, isFetching, isLoading };
  
  }
  
  //delete
 const queryClient = useQueryClient();
 
  const useDeleteBook = () => {
    const mutate = useMutation({
      mutationFn: (id: number) => axiosClient.delete(`/book/delete/${id}`),
      onSuccess: (res : any) => {
        console.log("berhasil");
        queryClient.invalidateQueries({queryKey :["/book/list"]});
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
      },
      onError: (err) => {
        console.log("Gagal");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    })
    return mutate
  }
  //create
  const createBook = (payload: BookCreatePayload) => {
    return axiosClient.post("/book/create", payload);
  };
  const useCreateBook = () => {
    const mutate = useMutation({
      mutationFn: (payload: BookCreatePayload) => createBook(payload),
      onSuccess: (res) => {
        console.log("response", res);
      },
      onError: (err) => {
        console.log("error", err);
      }
    });

    return mutate
  };

  //update

  const updateBook = (id : string ,payload: BookCreatePayload ) => {
    return axiosClient.put(`/book/update/${id}`, payload);
  };
  const useUpdateBook = (id : string) => {
    const mutate = useMutation({
      mutationFn: (payload: BookCreatePayload) => updateBook(id,payload),
      onSuccess: (res) => {
        console.log("response", res);
      },
      onError: (err) => {
        console.log("error", err);
      }
    });

    return mutate
  };
  const defaultParams = {
    title: "",
    author: "",
    from_year: "",
    to_year: "",
    page: 1,
    pageSize: 10,
  };

  const getBookList = async (
    params: BookListFilter
  ): Promise<BookListResponse> => {
    return axiosClient.get("/book/list", { params }).then((res) => res.data);
  };

  const useBookList = () => {
    let [params, setParams] = useState<BookListFilter>(defaultParams);
    let [filterParams, setFilterParams] =
      useState<BookListFilter>(defaultParams);

    const handleClear = () => {
      console.log("clear berjalan");
      setParams(defaultParams);
      setFilterParams(defaultParams);
    };
    const handleFilter = () => {
      console.log("filter berjalan");
      setFilterParams(() => {
        return {
          ...params,
        };
      });
    };

    const handlePage = (page: number) => {
      console.log("page berjalan");

      setFilterParams((filterParams) => {
        return {
          ...filterParams,
          page: page,
        };
      });

      setParams((params) => {
        return {
          ...params,
          page: page,
        };
      });
    };

    const handlePageSize = (e: ChangeEvent<any>) => {
      console.log("pageSize berjalan");
      setParams((params) => {
        return {
          ...params,
          page: 1,
          pageSize: e.target.value,
        };
      });

      setFilterParams((filterParams) => {
        return {
          ...filterParams,
          page: 1,
          pageSize: e.target.value,
        };
      });
    };

    const { data, isFetching, isLoading } = useQuery<BookListResponse>({
      queryKey: ["/book/list", filterParams],
      queryFn: () => getBookList(filterParams),
    });

    return {
      data,
      isFetching,
      isLoading,
      params,
      setParams,
      handleClear,
      handleFilter,
      handlePage,
      handlePageSize,
    };
  };

  return { useBookList, useCreateBook , useDetailBook , useUpdateBook , useDeleteBook , useDeleteBulkBook };
};


export default useBookModule;
