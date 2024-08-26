const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({})
//     res.status(200).json({ tasks })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body)
//     res.status(201).json({ task })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

// const getTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params
//     const task = await Task.findOne({ _id: taskID })
//     if (!task) {
//       return res.status(404).send({ msg: `No task with id : ${taskID}` })
//     }
//     res.status(200).json({ task })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    // const error = new Error('Not Found')
    // error.status = 404
    // return next(error)  // send to builtin error handler or custom error handler middleware
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})

// const deleteTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params
//     const task = await Task.findOneAndDelete({ _id: taskID })
//     if (!task) {
//       return res.status(404).send({ msg: `No task with id : ${taskID}` })
//     }
//     res.status(200).json({ task })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})

// updateTask uses patch method
// const updateTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       // if we dont add this to properties even if task is updated we wil get old one in res. and if we send no value still it will get updated without giving error
//       new: true, // Returns the updated document
//       runValidators: true  // Validates the update against the schema
//     })
//     if (!task) {
//       return res.status(404).send({ msg: `No task with id : ${taskID}` })
//     }
//     res.status(200).json({ task })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,  // Returns the updated document
    runValidators: true,  // Validates the update against the schema
  })

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})

// editTask uses put method
// const editTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true
//     })
//     if (!task) {
//       return res.status(404).send({ msg: `No task with id : ${taskID}` })
//     }
//     res.status(200).json({ task })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  // editTask
}
