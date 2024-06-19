import { useRecoilValue, useRecoilState } from 'recoil';
import { Category, categoryState, toDoSelector } from '../atoms';
import CreateToDo from '../components/CreateToDo';
import ToDo from '../components/ToDo';
import styled from 'styled-components';

const Wapper = styled.div`
  width: 700px;
  margin: 0 auto;
  margin-top: 30px;
  h1 {
    font-size: 30px;
  }
`;

export default function TodoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Wapper>
      <h1>ToDos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Category.TO_DO}>ToDo</option>
        <option value={Category.DOING}>Doing</option>
        <option value={Category.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Wapper>
  );
}
