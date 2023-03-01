import React, { useState, useEffect } from "react";
import axios from "axios";
import "./book.css";
import Loading from "./Loading";
import ReactPaginate from "react-paginate";

const Book = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState("");
  const [click, setClick] = useState("");
  const [currentpage, setcurrentPage] = useState(1);
const [loading,Setloading] =useState(false)
  let pageCount = 10;
  let limit = 11;

  const handleclick = () => {
    setClick(change);
  };

  useEffect(() => {
    axios
      .get(
        `https://openlibrary.org/search.json?title=${click}&limit=${limit}&page=${currentpage}`
      )
      .then((res) => {
        setData(res.data.docs);
        Setloading(true)
      });
  }, [click, currentpage]);

  const handlePageClick = async (event) => {
    let page = await (event.selected + 1);
    setcurrentPage(page);
    // console.log(page)
  };

  return (
    <div className="container">
      <div className="box">
        <input
          className="form-control"
          placeholder="Search Here"
          type="text"
          onChange={(e) => {
            setChange(e.target.value);
          }}
        />
        <button className="btn btn-primary" onClick={handleclick}>
          search
        </button>
      </div>



      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Type</th>
            <th scope="col">Key</th>
          </tr>
        </thead>
  
         { data.map((ele, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td>{ele.title}</td>
                <td>{ele.type}</td>
                <td>{ele.key}</td>
              </tr>
            </tbody>
          );
        }) } 


        <div>
        <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
        </div>

      </table>

     
      
    </div>
  );
};

export default Book;
