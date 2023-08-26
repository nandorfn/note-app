'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface MenuProps {
    handleMenu: () => void;

}

const AddTodo: React.FC<MenuProps> = ({ handleMenu }) => {
    const [title, setTitle] = useState<string>('');
    const [deadline, setDeadline] = useState<Date>(new Date());
    const [startTime, setStartTime] = useState<Date>(new Date());
    const [endTime, setEndTime] = useState<Date>(new Date());
    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post("/api/tasks", {
            title: title,
            deadline: deadline,
            startTime: startTime,
            endTime: endTime,
        });
        handleMenu();
        setTitle('')
        setDeadline(new Date());
        setStartTime(new Date());
        setEndTime(new Date());
        router.refresh();
    };

    const inputStyle: string = 'w-full p-2 bg-gray-100 rounded-sm';
    const red = {
        color: '#FF0000'
    }
    return (
        <>
            <form className="flex flex-col gap-4 mt-40 relative bg-white shadow-md p-4 pt-0 h-fit rounded-lg">
                <button onClick={handleMenu} className="absolute end-4 top-4" type="button"><i className="fa-solid fa-circle-xmark fa-fw fa-lg shadow-md" style={red}></i></button>
                <h2 className="text-xl text-center pt-8">Add Todo</h2>
                <div>
                    <label htmlFor="title-task">Title </label>
                    <input onChange={(e) => setTitle(e.target.value)} className={inputStyle} placeholder="Title" type="text"  />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="deadline-task">Date</label>
                    <DatePicker
                        className={inputStyle}
                        name="deadline-task"
                        selected={deadline}
                        onChange={(date) => setDeadline(date as Date)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="startDate">Start </label>
                    <DatePicker
                        className={inputStyle}
                        name="startDate"
                        selected={startTime}
                        onChange={(date) => setStartTime(date as Date)}
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
                        selected={endTime}
                        onChange={(date) => setEndTime(date as Date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                </div>
                <button onClick={handleSubmit} className="bg-blue-300 rounded-md p-2 text-white" type="submit">Submit</button>
            </form>
        </>
    );
};

export default AddTodo;