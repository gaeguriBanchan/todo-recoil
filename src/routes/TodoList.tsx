import { useForm } from 'react-hook-form';

export default function TodoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register('email')} type="text" placeholder="white a todo" />
        <input
          {...register('firstName')}
          type="text"
          placeholder="white a todo"
        />
        <input
          {...register('lastName')}
          type="text"
          placeholder="white a todo"
        />
        <input
          {...register('userName')}
          type="text"
          placeholder="white a todo"
        />
        <input
          {...register('passWord')}
          type="text"
          placeholder="white a todo"
        />
        <input
          {...register('passWord1')}
          type="text"
          placeholder="white a todo"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
