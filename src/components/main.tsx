import Bgdark from "../images/bg-desktop-dark.jpg";
import Bglight from "../images/bg-desktop-light.jpg";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

export default function Main() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Complete online JavaScript course", checked: false },
    { id: 2, text: "Jog around the park 3x", checked: false },
    { id: 3, text: "10 minutes meditation", checked: false },
    { id: 4, text: "Read for 1 hour", checked: false },
    { id: 5, text: "Pick up groceries", checked: false },
    { id: 6, text: "Complete Todo App on Frontend Mentor", checked: false },
  ]);
  const [mode, setMode] = useState(false);

  const toggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <>
      <div
        style={
          {
            "--bg-image": `url(${Bgdark})`,
            "--bg-image2": `url(${Bglight})`,
          } as React.CSSProperties
        }
        id="whole"
        className={`h-full ${mode ? "bg-[#FAFAFA] before:bg-[image:var(--bg-image2)]" : "bg-[#171823] before:bg-[image:var(--bg-image)]"} flex justify-center pb-[50px] before:content-['']  before:absolute before:top-0 before:h-70 before:w-full before:bg-cover before:bg-center`}
      >
        <div id="container" className="w-[540px] mt-[10vh] relative z-1">
          <div id="top" className="flex justify-between items-center mb-[30px]">
            <h1 className="text-white text-[40px] font-700 tracking-[15px]">
              TODO
            </h1>
            <button
              className="cursor-pointer h-[26px] w-[26px]"
              onClick={() => setMode((v) => !v)}
            >
              <img
                src={
                  mode ? "src/images/icon-moon.svg" : "src/images/icon-sun.svg"
                }
                alt=""
              />
            </button>
          </div>

          <div
            id="new"
            className={`h-[64px] ${mode ? "bg-white shadow-md shadow-[#C2C3D680]" : "bg-[#25273D] shadow-md shadow-[#00000080]"} gap-[10px] flex pl-6 items-center rounded-[5px] mb-[30px]`}
          >
            <label className="custom-check">
              <input type="checkbox" />
              <span className="box"></span>
            </label>
            <input
              type="text"
              placeholder="Create a new todo..."
              className={`" ${mode ? "placeholder-[#9495A5]" : "placeholder-[#767992]"}   font-400 text-[18px] text-white tracking-[-0.25px] outline-none"`}
            />
          </div>

          <div
            id="todos"
            className={`${mode ? "shadow-xl shadow-[#C2C3D680]" : " shadow-xl shadow-[#00000080]"}`}
          >
            <div
              id="footer"
              className={`${mode ? "bg-white" : "bg-[#25273D]"} rounded-[5px] overflow-hidden`}
            >
              <div id="lists ">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    id="list"
                    className={`h-[64px] ${mode ? "text-[#494C6B] border-b-[#E3E4F1]" : "text-[#C8CBE7] border-b-[#393A4B]"} flex pl-6 items-center border-b-[1px] `}
                  >
                    <label className="custom-check">
                      <input
                        type="checkbox"
                        checked={todo.checked}
                        onChange={() => toggle(todo.id)}
                      />
                      <span className="box"></span>
                      <p
                        className={`text-[18px] font-400 tracking-[-0.25px] ${
                          todo.checked
                            ? ` ${mode ? "text-[#D1D2DA]" : "text-[#4D5067]"}  line-through`
                            : ""
                        } `}
                      >
                        {todo.text}
                      </p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
