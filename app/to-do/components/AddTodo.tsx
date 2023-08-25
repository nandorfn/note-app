'use client'
import type { TaskStatus, TaskScheduleEnum } from "@prisma/client"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


interface TaskFormData {
    title: string;
    deadline: string;
    status: TaskStatus;
    schedule: TaskScheduleEnum;
    timeSlotId?: number;
}

const AddTodo: React.FC = () => {
    const [date, setDate] = useState< Date | null>(new Date());
    const [startTime, setStartTime] = useState<Date | null>(new Date());
    const [endTime, setEndTime] = useState<Date | null>(new Date());


    const inputStyle: string = 'w-full p-2 bg-gray-100 rounded-sm';
    return (
        <>
            <form className="flex flex-col bg-white shadow-md p-4 w-1/4 rounded-lg">
                <h2 className="text-xl text-center">Add Todo</h2>
                <label htmlFor="title-task">Title: </label>
                <input className={inputStyle} placeholder="Title" type="text" name="title-task" id="titleTask" />
                <label htmlFor="deadline-task">Deadline</label>
                <DatePicker
                    className={inputStyle}
                    name="deadline-task"
                    selected={date}
                    onChange={(date) => setDate(date)}
                />
                <label htmlFor="startDate">Start: </label>
                <DatePicker
                    className={inputStyle}
                    name="startDate"
                    selected={startTime}
                    onChange={(date) => setStartTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
                <label htmlFor="endDate">End: </label>
                <DatePicker
                    className={inputStyle}
                    name="endDate"
                    selected={endTime}
                    onChange={(date) => setEndTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
                <button className="bg-blue-300 rounded-md p-2 my-4 text-white" type="submit">Submit</button>
            </form>
        </>
    );
};

export default AddTodo;