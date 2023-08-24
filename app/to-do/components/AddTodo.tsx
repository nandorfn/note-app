import type { TaskStatus, TaskScheduleEnum } from "@prisma/client"

interface TaskFormData {
  title: string;
  deadline: string;
  status: TaskStatus;
  schedule: TaskScheduleEnum;
  timeSlotId?: number;
}

const AddTodo: React.FC = () => {
    return (
        <>
            <form action="POST">
                <input type="text" name="title-task" id="titleTask" />
                <input type="datetime-local" name="deadline-task" id="deadlineTask" />
            </form>
        </>
    );
};

export default AddTodo;