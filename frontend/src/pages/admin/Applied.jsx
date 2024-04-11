import { useTable } from 'react-table';
import { useState, useEffect } from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import axios  from 'axios';
import { Button } from 'flowbite-react';

const columns = [
  {
    Header: 'Roll No',
    accessor: 'rollno'
  },
  {
    Header: 'First Name',
    accessor: 'firstname'
  },
  {
    Header: 'Last Name',
    accessor: 'lastname'
  },
  {
    Header: 'CGPA',
    accessor: 'cgpa'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Birth Date',
    accessor: 'bday'
  },
  {
    Header: 'Phone Number',
    accessor: 'phno'
  },
  {
    Header: 'Parent\'s Email',
    accessor: 'pemail'
  },
  {
    Header: 'Gender',
    accessor: 'gender'
  }
];

export const Applied = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/student/appliedlist");
        const fetchedData = response.data;
        setData(fetchedData);
      } catch (error) {
        if (error.response && error.response.status === 411) {
          alert(error.response.data.message);
        } else {
          console.error('Error during fetch:', error);
        }
      }
    };
  
    fetchData(); // Call the inner function immediately
  
  }, []); // Empty dependency array to run only once on component mount
  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <div className="flex flex-row w-full h-screen">
      <div className="w-1/5 h-full">
        <AdminSidebar />
      </div>
      <div className="w-3/4 h-full">
        <div>
          <h1 className="mt-11 px-10 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-black">
            Applied Student List
          </h1>
        </div>
        <div className='mx-5 mt-10 flex flex-row'>
          <h5 className="mx-5 text-2xl leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-black">
            Filter By: 
          </h5>
          <div className='flex flex-row'>
            <Button color="dark" size="md" onClick={async()=>{
              try {
                const response = await axios.get("http://localhost:3000/api/v1/user/filter-cgpa");
                const fetchedData = response.data;
                setData(fetchedData);
            } catch (error) {
                if (error.response && error.response.status === 411) {
                    alert(error.response.data.message);
                } else {
                    console.error('Error during signin:', error);
                }
            }
            }}>CGPA</Button>
            <Button color="dark" size="md" onClick={async()=>{
              try {
                const response = await axios.get("http://localhost:3000/api/v1/user/filter-bday");
                const fetchedData = response.data;
                setData(fetchedData);
            } catch (error) {
                if (error.response && error.response.status === 411) {
                    alert(error.response.data.message);
                } else {
                    console.error('Error during signin:', error);
                }
            }
            }}>Birth Date</Button>
          </div>
        </div>
        <div className='mt-5'>
          <table {...getTableProps()} className='w-full ml-8 border-collapse border'>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} >
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} className='border-4'>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}  className="text-center" >
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} className='py-4 border-4'>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Applied;