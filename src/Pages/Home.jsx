import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
// import TodoCard from "./TodoCard";
import { addTodo, toggleTodo, deleteTodo } from "../redux/modules/todos";
import Router from "../Shared/Router";
// import { useNavigate } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todoList = useSelector((state) => state.todos.todoList);

  //유일한 고유값을 만들어 ID에 넣자
  const onAddTodo = () => {
    // const newID = Math.floor(Math.random() * 100);
    // console.log(newID());
    const todo = {
      title: title,
      content: content,
      isComplete: false,
    };
    if (title.trim() === "" || content.trim() === "") return false;

    setTitle("");
    setContent("");
    dispatch(addTodo(todo));
  };
  const onDeleteTodo = (id) => {
    const _todos = todoList.filter((p) => p.id !== id);
    dispatch(deleteTodo(id));
  };

  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="page">
      <div className="header">
        My Todo List
        <div>React</div>
      </div>
      <div className="addBox">
        <div className="addBoxcontents">
          <span>제목</span>
          <Stinput
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></Stinput>
        </div>
        <div className="addBoxcontents">
          <span>내용</span>
          <Stinput
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></Stinput>
        </div>
        <button onClick={onAddTodo} className="mintbutton">
          작성하기
        </button>
      </div>
      <div>
        <div>
          <h1>🔨🔨🔨Working..🔨🔨🔨</h1>
          <div className="cardbody">
            {todoList
              .filter((todo) => !todo.isComplete)
              .map((todo) => {
                return (
                  <div className="showingbox" key={todo.id}>
                    <Link to={`/DetailPage/${todo.id}`}>상세페이지로 숑!</Link>
                    <h2>{todo.title}</h2>
                    <div>{todo.content}</div>
                    <button
                      className="btns"
                      onClick={() => onDeleteTodo(todo.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="btns"
                      onClick={() => onToggleTodo(todo.id)}
                    >
                      완료하기
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <h1>👏👏👏Completed..👏👏👏</h1>
          <div className="cardbody">
            {todoList
              .filter((todo) => todo.isComplete)
              .map((todo) => {
                return (
                  <div className="showingbox" key={todo.id}>
                    <Link to={`/DetailPage/${todo.id}`}>상세페이지로 숑! </Link>
                    <h2>{todo.title}</h2>
                    <div>{todo.content}</div>
                    <button
                      className="btns"
                      onClick={() => onDeleteTodo(todo.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="btns"
                      onClick={() => onToggleTodo(todo.id)}
                    >
                      취소하기
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const Stinput = styled.input`
  border-radius: 15px;
  border: 1px solid gray;
  margin-left: 15px;
  margin-right: 15px;
  height: 25px;
`;
