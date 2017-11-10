let gradeBook = require('../lib/gradeBook').gradeBook;

exports["My frist test"] = function(test) {
    gradeBook.addGrade(3);
    test.equal(gradeBook.getGradeCount(), 1);
    test.done();
}