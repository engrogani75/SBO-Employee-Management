

const Table = ({ workList }) => {
    return (
        <div className="mt-4">
            <h1 className="text-center text-xl my-6 font-bold capitalize">Table of your worksheet</h1>
        <table className="w-full text-sm text-left rtl:text-right">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-3">Task</th>
      <th scope="col" className="px-6 py-3">Hours Worked</th>
      <th scope="col" className="px-6 py-3">Date</th>
    </tr>
  </thead>
  <tbody>
    {workList?.map((work, index) => (
      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4">{work.task}</td>
        <td className="px-6 py-4">{work.hours}</td>
        <td className="px-6 py-4">{work.date}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
    );
};

export default Table;