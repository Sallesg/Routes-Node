const express = require('express');
const server = express();
server.use(express.json())

const projects = [];

server.get('/projects', (req, res) => {
  return res.json(projects)
});

server.post('/projects', (req, res) => {
  const {id, title } = req.body;
  const program = {
    id,
    title,
    tasks: []
  }

  projects.push(program);
  return res.json(projects)
})

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const program = projects.find(changetitle => changetitle.id == id)

  program.title = title
  return res.json(program)
});

function log (req, res, next) {
  console.count("Number of requisitions")
  return next();
}

server.use(log);

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(changetitle=> changetitle.id == id)
  projects.splice(index, 1)
  return res.send({
    success: true
  })
})

server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  project.tasks.push(title);
  return res.json(project);
});

server.listen(3001);