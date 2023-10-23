import chalk from "chalk";
import inquirer from "inquirer";
const apiLink = "https://opentdb.com/api.php?amount=6&category=18&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results;
};
let data = await fetchData(apiLink);
let startQuiz = async () => {
    let score = 0;
    // for use name 
    let name = await inquirer.prompt({
        type: "input",
        name: "fname",
        message: "What Is Your Name"
    });
    for (let i = 1; i <= 5; i++) {
        9;
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: data[i].question,
            choices: answers.map((val) => val),
        });
        if (ans.quiz == data[i].correct_answer) {
            ++score;
            console.log(chalk.bold.italic.blue("Correct"));
        }
        else {
            console.log(`cprrect answer is ${chalk.bold.italic.red(data[i].correct_answer)}`);
        }
    }
    console.log(`Dear ${chalk.green.bold(name.fname)}, Your score is ${chalk.red.bold(score)}out of ${chalk.red.bold(`5`)} `);
};
startQuiz();
