import { getList } from "@/utils/data";
import React from "react";

//put addlist html in here!!!!!
export default async function List({ user_id }) {
  console.log("lorem");
  const { data: list } = await getList(user_id);
  const titles = list.map((title) => {
    return title;
  });
  console.log(titles);
  return (
    <div>
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
      {Array.isArray(list) &&
        list.map(({ id, title, list_item }) => {
          return (
            <a
              key={id}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              className="button"
            >
              {title}
            </a>
          );
        })}
    </div>
  );
}
