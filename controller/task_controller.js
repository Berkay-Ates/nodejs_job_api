const mongoModel = require('../model/task_model/task_model');

const getTasks = async (req, res) => {
    try {
        const tasks = await mongoModel.find();
        res.status(200).json({ tasks: tasks });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await mongoModel.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: 'the job that you looking for does not exists' });
        }
        res.status(200).json({ task: task });

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTask = async (req, res) => {
    try {
        const newTask = await mongoModel.create(req.body);
        req.status(201).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const newTasks = req.body;
        const taskOld = await mongoModel.findOne({ _id: taskID });
        const taskUpdated = await mongoModel.findOneAndUpdate({ _id: taskID }, newTasks, { new: true, runValidators: true });
        if (!taskUpdated) {
            res.status(404).json({ msg: 'there is not an id with desired name to update' });
        }
        res.status(200).json({ taskid: taskID, datanew: newTasks, dataold: taskOld, dataUpdated: taskUpdated });
    } catch (error) {
        res.status(500).json({ msg: error });

    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await mongoModel.findOneAndDelete({ _id: taskID });
        res.status(202).json({ task: null, status: 'success' });
    } catch (error) {
        res.status(500).json({ msg: 'hello world' });

    }
}

module.exports = { getTask, getTasks, createTask, updateTask, deleteTask };