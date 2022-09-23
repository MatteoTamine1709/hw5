const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

const updatedScoreStudentList = studentList.map(student => {
    const updatedScores = student.scores.map(score => score + 5);
    return {
        firstName: student.firstName,
        lastName: student.lastName,
        scores: updatedScores
    };
});

const averageScoreStudentList = updatedScoreStudentList.map(student => {
    const averageScore = student.scores.reduce((total, score) => total + score) / student.scores.length;
    return {
        firstName: student.firstName,
        lastName: student.lastName,
        scores: [...student.scores, averageScore],
    };
});

for (let i = 0; i < averageScoreStudentList.length; i++) {
    let student = averageScoreStudentList[i];
    console.log(`Full name (last, first): ${student.lastName}, ${student.firstName}`);
    console.log(`Updated scores are: ${student.scores}`);
}