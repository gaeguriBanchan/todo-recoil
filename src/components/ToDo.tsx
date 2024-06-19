import React from 'react';
import { Category, IToDo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const DeleteBtn = styled.button`
  color: red;
  font-weight: 700;
`;

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const onDelete = () => {
    setToDos((oldToDos) => {
      const newToDos = oldToDos.filter((todo) => todo.id !== id);
      return newToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Category.DOING && (
        <button name={Category.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Category.TO_DO && (
        <button name={Category.TO_DO} onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== Category.DONE && (
        <button name={Category.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <DeleteBtn onClick={onDelete}>DELETE</DeleteBtn>
    </li>
  );
}
