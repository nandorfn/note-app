'use client'
import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO } from 'date-fns';
import Link from "next/link";

const TodoEditor: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [deadline, setDeadline] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());

  const params = useParams();
  useEffect(() => {
    axios.get(`/api/tasks/${params.id}`)
      .then(response => {
        setTitle(response.data.title);
        setDeadline(response.data.deadline);
        setStartTime(response.data.startTime);
        setEndTime(response.data.endTime);
      })
      .catch(error => console.error(error));
  }, [params.id]);


  const router = useRouter();
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.patch(`/api/tasks/${params.id}`, {
      title: title,
      deadline: deadline,
      startTime: startTime,
      endTime: endTime,
    });
    router.push('/to-do');
    router.refresh();
  };

  const inputStyle: string = 'w-full p-2 bg-gray-100 rounded-sm';
  const red = {
    color: '#FF0000'
  }
  return (
    <>
      <form className="flex flex-col gap-4 mt-40 relative bg-white shadow-md p-4 pt-0 h-fit rounded-lg">
        <Link href={'/to-do'}>
          <button className="absolute end-4 top-4" type="button"><i className="fa-solid fa-circle-xmark fa-fw fa-lg shadow-md" style={red}></i></button>
        </Link>
        <h2 className="text-xl text-center pt-8">Add Todo</h2>
        <div>
          <label htmlFor="title-task">Title </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className={inputStyle} placeholder="Title" type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="deadline-task">Date</label>
          <DatePicker
            className={inputStyle}
            name="deadline-task"
            selected={deadline ? new Date(deadline) : null} onChange={(date) => setDeadline(date as Date)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="startDate">Start </label>
          <DatePicker
            className={inputStyle}
            name="startDate"
            selected={startTime ? new Date(startTime) : null} onChange={(date) => setStartTime(date as Date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="endDate">End </label>
          <DatePicker
            className={inputStyle}
            name="endDate"
            selected={endTime ? new Date(endTime) : null} onChange={(date) => setEndTime(date as Date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
        <button onClick={handleUpdate} className="bg-blue-300 rounded-md p-2 text-white" type="submit">Update</button>
      </form>
    </>
  );
};

export default TodoEditor;