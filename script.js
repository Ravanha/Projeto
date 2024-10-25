document.getElementById('quizForm').addEventListener('submit', function(event){
    event.preventDefault();
 
    //Capturando os Campos
    let question1 = document.getElementById('question1').value;
    let question2 = document.getElementById('question2').value;
    let question3 = document.getElementById('question3').value;
    let question4 = document.getElementById('question4').value;
    let question5 = document.getElementById('question5').value;

    let questiona = document.getElementById('questiona').value;
    let questionb = document.getElementById('questionb').value;
    let questionc = document.getElementById('questionc').value;
    let questiond = document.getElementById('questiond').value;
    let questione = document.getElementById('questione').value;
 
    //Validação dos Campos
    if (!question1 || !question2 || !question3 || !question4 ||!question5 ||!questiona ||!questionb ||!questionc ||!questiond ||!questione) {
        alert('Por favor, preencha todos os campos antes de enviar');
        return;
    }
 
    let reader = new FileReader();
 
    reader.onload = function(event) {
        let photoUrl = event.target.result;
 
 
    //exibe o resultado na página HTML
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Suas Respostas</h2>
        <p><strong>Questão 1:</strong>${question1}</p>
        <p><strong>Questão 2:</strong>${question2}</p>
        <p><strong>Questão 3:</strong>${question3}</p>
        <p><strong>Questão 4:</strong>${question4}</p>
        <p><strong>Questão 5:</strong>${question5}</p>

         <p><strong>Questão A:</strong>${questiona}</p>
         <p><strong>Questão B:</strong>${questionb}</p>
         <p><strong>Questão C:</strong>${questionc}</p>
        <p><strong>Questão D:</strong>${questiond}</p>
        <p><strong>Questão E:</strong>${questione}</p>
    `;
 
    //Limpa o formulário após enviar
    document.getElementById('quizForm').reset();
 
    }
 
)

