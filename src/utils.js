const fs = require("fs");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const createTeam = (teamMembers) => {
  return new Promise((resolve, reject) => {
    let teamMemberObjs = teamMembers.map((member) => {
      switch (member.role) {
        case "Manager":
          return new Manager(
            member.name,
            member.id,
            member.email,
            member.officeNumber
          );
        case "Engineer":
          return new Engineer(
            member.name,
            member.id,
            member.email,
            member.github
          );
        case "Intern":
          return new Intern(
            member.name,
            member.id,
            member.email,
            member.school
          );
      }
    });
    resolve({
      ok: true,
      message: "Member objects created!",
      data: teamMemberObjs,
    });
  });
};

const generateHtml = (teamMemberObjs) => {
  return new Promise((resolve, reject) => {
    let html = [
      `
        <!DOCTYPE>
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="styles.css" />
                <title>My Team</title>
            </head>
            <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
        `,
    ];
    for (const member of teamMemberObjs) {
      // HTML for generic member info
      let icon =
        member.role === "Manager"
          ? `<i class="material-icons">person</i>`
          : member.role === "Engineer"
            ? `<i class="material-icons">engineering</i>`
            : `<i class="material-icons">school</i>`;
      html.push(`
                <div class="card">
                    <div class="card-header">
                        <h2>${member.name}</h2>
                        <h3>${icon}${member.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>ID: ${member.id}</li>
                            <li>Email: <a href="mailto:${member.email}">${member.email}</a></li>
                            `);
      // HTML for each role type
      switch (member.role) {
        case "Manager":
          html.push(`<li>Office Number: ${member.officeNumber}</li>`);
          break;
        case "Engineer":
          html.push(
            `<li>GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></li>`
          );
          break;
        case "Intern":
          html.push(`<li>School: ${member.school}</li>`);
          break;
      }

      // Close the HTML for the member
      html.push(`
                        </ul>
                    </div>
                </div>`);
    }

    // Close body and html tags
    html.push(
      `
                </main>
            </body>
            </html>
        `
    );
    resolve({
      ok: true,
      message: "HTML generated!",
      data: html.join(""),
    });
  });
};

const writeHTML = (html) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", html, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "HTML written to index.html!",
      });
    });
  });
};

const copyCSS = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/styles.css", "./dist/styles.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File styles.css copied!",
      });
    });
  });
};

module.exports = { createTeam, generateHtml, writeHTML, copyCSS };