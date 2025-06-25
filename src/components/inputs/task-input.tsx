// import TrashCanIcon from '@assets/icons/trash-can.svg'
import TrashCanIcon from '@assets/icons/trash-can.svg?react'

function TaskInput() {

    return(
        <div className="grid grid-cols-4 gap-2">
            <input className="col-span-3" type="text" />
            <button>Add Task</button>
            <TrashCanIcon width="10" height="10"/>
            no
        </div>
    )
}

export default TaskInput