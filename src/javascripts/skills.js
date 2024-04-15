const softSkills = [
    'Problem-Solving', 'Communication', 'Self-motivated', 'Adaptability', 'Project management',
    'Documentation', 'Time Management', 'Willingness to learn', 'Teamwork', 'Driven'
];

const hardSkills = [
    'Testing', 'Interaction Design', 'Version Control', 'Design Thinking',
    'Databases', 'Decision Mapping', 'Prototyping'
];

const uiUxDesign = [
    'Figma', 'Sketch', 'Canva'
];

const programmingDevelopment = [
    'HTML', 'CSS', 'GIT', 'TypeScript', 'React', 'AngularJS', 'NodeJS', 'NESTJS',
     'C#', '.Net', 'Python', 'C++', 'Selenium', 'TestCafe',
     'MongoDB', 'SQL'
];


function createSkillList(skillsArray, containerId, title) {
    const container = document.getElementById(containerId);
    let html = `<h3>${title}</h3><ul>`;
    skillsArray.forEach(skill => {
        html += `<li>${skill}</li>`;
    });
    html += '</ul>';
    container.innerHTML = html;
}

createSkillList(softSkills, 'soft-skills-column', 'Soft Skills');
createSkillList(hardSkills, 'hard-skills-column', 'Hard Skills');
createSkillList(uiUxDesign, 'ui-ux-design-column', 'UI/UX Design');
createSkillList(programmingDevelopment, 'programming-development-column', 'Programming & Development');