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

const cLastNameResults = studentList
    .filter(student => student.lastName[0] === "C")
    .map(student => {
        const avgScore = student.scores.reduce((total, score) => total + score) / student.scores.length;
        const minScore = Math.min(...student.scores);
        const maxScore = Math.max(...student.scores);
        return {
            firstName: student.firstName,
            lastName: student.lastName,
            avgScore,
            minScore,
            maxScore,
        };
    });

console.log(cLastNameResults);