import React, { useEffect } from "react";
import "../App.css";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
// import todo from "./Home.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getTodoByID } from "../redux/modules/todos";
import { useState } from "react";
const DetailPage = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTodoByID(Number(id)));
  }, [dispatch, id]);
  const a = () => {
    const done = todo.isComplete;
    if (done === true) {
      return "완료했지롱!!!!🙆‍♀️";
    } else {
      return "진행중~~~🤷";
    }
  };
  return (
    <StContainer>
      <div>
        <StContentBox>
          Number{todo?.id}.<StTitle> {todo.title}</StTitle>
          <StContent>{todo.content}</StContent>
          <hr />
          <Stjinhaeng>진행상황 : {a()}</Stjinhaeng>
          <hr />
          <Link to="/">
            <button className="closeDetail">닫기</button>
          </Link>
        </StContentBox>
      </div>
    </StContainer>
  );
};

export default DetailPage;

const StContainer = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  justify-content: center;

  height: 600px;
  width: 70%;
  padding: 30px;
  margin: auto;
`;
const StTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-top: 20px;
`;
const StContent = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;
const StContentBox = styled.div`
  width: 400px;
  margin: auto;
  padding: 50px;
`;
const Stjinhaeng = styled.div`
  font-weight: bold;
  /* background-color: bisque; */
  height: 30px;
  align-items: center;
  font-size: 13px;
  justify-content: center;
  display: flex;
  color: gray;
`;
