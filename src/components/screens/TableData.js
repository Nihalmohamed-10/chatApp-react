import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function TableData() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limitedData = 5;
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Simulating data loading completion
    setIsLoading(false);
  }, []);

  useEffect(() => {
    axios
      .get("https://6545d793fe036a2fa954dd87.mockapi.io/students")
      .then((res) => {
        setData(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterData = data.filter((item) => item?.name.includes(value));
  const totalPages = Math.ceil(filterData.length / limitedData);
  const startIndex = (currentPage - 1) * limitedData;
  const endIndex = startIndex + limitedData;
  const finalData = filterData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchValue) => {
    setValue(searchValue);
    setCurrentPage(1);
    setShowAlert(false);
  };
  useEffect(() => {
    setShowAlert(filterData.length === 0 && value !== "");
  }, [filterData, value]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="tableDiv">
          <Link to="/">
            <MdArrowBackIos className="fromTable" />
          </Link>
          <SearchBar
            value={value}
            setValue={setValue}
            onSearch={handleSearch}
          />

          <h2>Data Table</h2>
          {showAlert && (
            <div className="alert">Searched data does not exist.</div>
          )}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {finalData.map((item) => (
                <tr key={item?.id}>
                  <th>{item?.id}</th>
                  <th>{item?.name}</th>
                  <th>{item?.class}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default TableData;
