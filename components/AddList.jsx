"use client";
import { useState } from "react";

export default function AddList() {
  const [listName, setListName] = useState("");
  const [rowContent, setRowContent] = useState([]);

  const addRow = () => {
    setRowContent([...rowContent, { content: "", checked: false }]);
  };

  const handleRowChange = (index, content) => {
    const updatedRowContent = [...rowContent];
    updatedRowContent[index].content = content;
    setRowContent(updatedRowContent);
  };

  const handleCheckboxChange = (index) => {
    const updatedRowContent = [...rowContent];
    updatedRowContent[index].checked = !updatedRowContent[index].checked;
    setRowContent(updatedRowContent);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="p-2 bg-slate-700 rounded-md mb-5 shadow-lg"
        onClick={addRow}
      >
        Add Item
      </button>

      <table className="w-1/3 bg-slate-400 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th>
              <label htmlFor="listName" className="mx-5 mb-5">
                Title:
              </label>
              <input
                className="border-2 border-sky-300 rounded-lg mb-5 mt-5 mr-5"
                id="listName"
                type="text"
                value={listName}
                placeholder="Name Your List here!"
                onChange={(e) => {
                  setListName(e.target.value);
                }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {rowContent.map((row, index) => (
            <tr
              key={index}
              className="flex flex-col justify-center items-center mb-5 mt-5 mx-5"
            >
              <td className="">
                <input
                  className="rounded-lg"
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={row.checked}
                  onChange={() => handleCheckboxChange(index)}
                />
                <input
                  className="rounded-lg ml-2 p-2"
                  type="text"
                  id={`listItem-${index}`}
                  value={row.content}
                  placeholder="Put something snazzy here!"
                  onChange={(e) => handleRowChange(index, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
