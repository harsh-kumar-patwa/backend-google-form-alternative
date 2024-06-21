import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const dbFilePath = path.join(__dirname, 'db.json');

app.use(bodyParser.json());

// Endpoint to check server status
app.get('/ping', (req, res) => {
    res.send('True');
});

// Endpoint to submit data
app.post('/submit', (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    const newSubmission = { name, email, phone, github_link, stopwatch_time };

    fs.readFile(dbFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading database file.');
            return;
        }

        let submissions = JSON.parse(data);
        submissions.push(newSubmission);

        fs.writeFile(dbFilePath, JSON.stringify(submissions, null, 2), (err) => {
            if (err) {
                res.status(500).send('Error writing to database file.');
                return;
            }

            res.status(201).send('Submission saved.');
        });
    });
});

// Endpoint to read a submission by index
app.get('/read', (req, res) => {
    const index = parseInt(req.query.index as string, 10);

    fs.readFile(dbFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading database file.');
            return;
        }

        const submissions = JSON.parse(data);

        if (index >= 0 && index < submissions.length) {
            res.json(submissions[index]);
        } else {
            res.status(404).send('Submission not found.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});