const {models} =  require('../models/defination/index')
module.exports = {
    createCourse :async (data) =>{
      const result = await models.courses.create(data);
      return result
    }
  //   createCourseHelper: async (data) =>{
  //     const newCourse = await models.courses.create(data);
  //     return newCourse
  // },
}