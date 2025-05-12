/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Table, Th, Thead, Tr, Tbody, Td } from "../../components/Table";
import useBookModule from "./lib";
import useDislosure from "@/hook/useDislosure";
import { Drawer } from "@/components/drawer";
import Filter from "./module/filter";
import Button from "@/components/Button";
import { Pagination } from "@/components/Pagination";

const Book = () => {
  const router = useRouter();
  const { useBookList, useDeleteBook } = useBookModule();
  const mutate = useDeleteBook();
  const { data, isFetching, isLoading, params, setParams, handleClear, handleFilter, handlePage, handlePageSize } = useBookList();
  const { isOpen, onOpen, onClose } = useDislosure();

  const [selectedBooks, setSelectedBooks] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        mutate.mutate(id);
      }
    });
  };

  const handleBulkDelete = () => {
    if (selectedBooks.length === 0) {
      Swal.fire("Error", "No books selected!", "error");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "This will delete all selected books!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete all!"
    }).then((result) => {
      if (result.isConfirmed) {
        selectedBooks.forEach((id) => mutate.mutate(id));
        setSelectedBooks([]);
        setSelectAll(false);
      }
    });
  };

  const handleSelectBook = (id: number) => {
    setSelectedBooks((prev) =>
      prev.includes(id) ? prev.filter((bookId) => bookId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedBooks([]);
    } else {
      setSelectedBooks(data?.data?.map((item) => item.id) || []);
    }
    setSelectAll(!selectAll);
  };

  return (
    <>
      <Drawer onClose={onClose} onClear={handleClear} onSubmit={handleFilter} title="Filter Buku" isOpen={isOpen}>
        <Filter params={params} setParams={setParams} />
      </Drawer>

      <section>
        <Button width="sm" onClick={onOpen} colorSchema="red" title="Filter" />
        <Button onClick={() => router.push("/book/tambah")} width="sm" colorSchema="red" title="Tambah" />
        <Button onClick={handleBulkDelete} width="sm" colorSchema="red" title="Delete" />
      </section>

      <section className="container px-4 mx-auto min-h-screen">
        <Table>
          <Thead>
            <Tr>
              <Th scope="col">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                />
              </Th>
              <Th scope="col">Name</Th>
              <Th scope="col">Status</Th>
              <Th scope="col">Customer</Th>
              <Th scope="col">Purchase</Th>
              <Th scope="col">Aksi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data?.map((item, index) => (
              <Tr key={item.id || index}>
                <Td>
                  <input
                    type="checkbox"
                    checked={selectedBooks.includes(item.id)}
                    onChange={() => handleSelectBook(item.id)}
                    className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                  />
                </Td>
                <Td>
                  <span>{item.author || "="}</span>
                </Td>
                <Td>
                  <span>{item.title || "="}</span>
                </Td>
                <Td>
                  <span>{item.year || "="}</span>
                </Td>
                <Td>
                  <span>{item.create_at || "="}</span>
                </Td>
                <Td>
                  <Button onClick={() => router.push(`book/${item.id}/update`)} colorSchema="blue" title="Update" />
                  <Button onClick={() => handleDelete(item.id)} colorSchema="red" title="Delete" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Pagination handlePage={handlePage} handlePageSize={handlePageSize} pageSize={params.pageSize} page={params.page} pagination={data?.pagination} />
      </section>
    </>
  );
};

export default Book;
