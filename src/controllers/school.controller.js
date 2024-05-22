const getIndex = (req, res) => {
    res.render('../src/views/index.ejs', { title: 'Página Principal' });
};

const getGrade1 = (req, res) => {
    res.render('../src/views/grade1.ejs', { title: 'Información del 1° Grado' });
};

const getGrade2 = (req, res) => {
    res.render('../src/views/grade2.ejs', { title: 'Información del 2° Grado' });
};

const getGrade3 = (req, res) => {
    res.render('../src/views/grade3.ejs', { title: 'Información del 3° Grado' });
};

export { getIndex, getGrade1, getGrade2, getGrade3 };
