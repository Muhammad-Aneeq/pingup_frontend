import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { MdEdit } from "react-icons/md";
import DeleteComp from "./DeleteComp";
import { ToastContainer, toast } from 'react-toastify';

export function UserTable({ data }: any) {
  return (
    <div className="w-4/5 mx-auto my-12 p-8  bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl text-white">
      <h1 className="text-center text-3xl font-bold mb-6">User&apos;s List </h1>
      <div className="flex justify-end my-2 text-lg ">
        <Link href="/login">Log Out</Link>
      </div>

      <Table>
        <TableCaption>A list of your all users.</TableCaption>
        <TableHeader className="font-dark text-[16px]">
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>CNIC</TableHead>
            <TableHead>CITY</TableHead>
            <TableHead>COUNTRY</TableHead>
            <TableHead>EDIT</TableHead>
            <TableHead>DELETE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.fullName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.cnic}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.country}</TableCell>
              <TableCell>
                <Link className="text-center" href={`/users/${item._id}`}>
                  <MdEdit fontSize={20} />
                </Link>
              </TableCell>
              <TableCell>
                <DeleteComp id={item._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer />
    </div>
  );
}
