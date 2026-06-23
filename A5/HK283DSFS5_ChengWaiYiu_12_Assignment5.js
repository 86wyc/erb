const Database = {

    Member: [
        { _id: "m1", name: "Andy", gender: "M", height: 158, weight: 45, totalScore: 33 },
        { _id: "m2", name: "Berry", gender: "F", height: 138, weight: 40, totalScore: 28 },
        { _id: "m3", name: "Chan", gender: "M", height: 164, weight: 55, totalScore: 31 },
        { _id: "m4", name: "Daisy", gender: "F", height: 150, weight: 47, totalScore: 16 },
        { _id: "m5", name: "Emma", gender: "F", height: 147, weight: 43, totalScore: 19 },
        { _id: "m6", name: "Fred", gender: "M", height: 174, weight: 58, totalScore: 21 },
    ],

    Course: [

        { _id: "c1", courseName: "Java", durationHr: 280 },
        { _id: "c2", courseName: "Python", durationHr: 250 },
        { _id: "c3", courseName: "JavaScript", durationHr: 300 },
        { _id: "c4", courseName: "C++", durationHr: 230 },
        { _id: "c5", courseName: "Design", durationHr: 340 },
    ],
};

// Q1
console.log('a)');
const members = Database.Member.forEach(member => {
    console.log(`${member.name} (${member._id}) : ${member.totalScore}`)
});
console.log('\n');


// Q2
console.log('b)');
const courses = Database.Course.forEach(course => {
    console.log(`${course._id} - ${course.courseName}: ${course.durationHr}hr`)
})
console.log('\n');


// Q3
console.log('c)');
let MaleMember = [];
MaleMember = Database.Member.filter(guy => guy.gender !== 'F');
console.log(MaleMember);
console.log('\n');


// Q4
console.log('d)');
sortCourse = Database.Course.sort((a, b) => a.durationHr - b.durationHr);
console.log(sortCourse);