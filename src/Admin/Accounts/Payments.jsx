import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import usePayments from "../../Hooks/usePayments";
const Payments = () => {
  const [allPayments] = usePayments();

  return (
    <div className="mt-20">
      <Table className="table">
        {/* head */}
        <Thead className="bg-cyan-700 text-white">
          <Tr>
            <Th>#</Th>
            <Th>Course Title</Th>
            <Th>Instructor</Th>
            <Th>Course Price</Th>
            <Th>Date</Th>
            <Th>TransactionId</Th>
            <Th>Payment Status</Th>
          </Tr>
        </Thead>
        <tbody>
          {allPayments.map((payment, index) => (
            <Tr key={payment._id}>
              <Td>{index + 1}</Td>
              <Td>{payment.title}</Td>
              <Td>{payment.teacherEmail}</Td>
              <Td>${payment.price}</Td>
              <Td>{payment.date}</Td>
              <Td>{payment.transactionId}</Td>
              <Td>{payment.status}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Payments;
