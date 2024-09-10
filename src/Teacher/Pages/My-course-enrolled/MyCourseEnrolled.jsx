import useMyCourseEnrolled from "../../../Hooks/useMyCourseEnrolled";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const MyCourseEnrolled = () => {
  const [myCourseEnrolled] = useMyCourseEnrolled();
  return (
    <div>
      <div className="mt-10">
        <Table className="table">
          {/* head */}
          <Thead className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white">
            <Tr>
              <Th>#</Th>
              <Th>Course Image</Th>
              <Th>Course Title</Th>
              <Th>Student Email</Th>
              <Th>Course Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {myCourseEnrolled.map((payment, index) => (
              <Tr
                key={payment._id}
                className="bg-gradient-to-r from-violet-200 to-pink-200 "
              >
                <Td>{index + 1}</Td>
                <Td>
                  <img className="w-24" src={payment.image} alt="" />
                </Td>
                <Td>{payment.title}</Td>
                <Td>{payment.studentEmail}</Td>
                <Td>${payment.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyCourseEnrolled;
