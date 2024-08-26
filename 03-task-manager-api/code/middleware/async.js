const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error) // send to builtin error handler or custom error handler middleware
    }
  }
}

module.exports = asyncWrapper
