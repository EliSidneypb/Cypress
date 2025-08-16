describe('Fluxo de Login', () => {
  beforeEach(() => {
    // garante que sempre começamos pela página de login
    cy.visit('/index.html');
  });

  it('deve mostrar erros quando os campos estão vazios', () => {
    cy.get('button[type="submit"]').click();

    cy.get('#email').next('small').should('contain', 'O email é obrigatório');
    cy.get('#password').next('small').should('contain', 'A senha é obrigatória');
    cy.location('pathname').should('include', '/index.html'); // continua na página de login
  });

  it('deve mostrar erro para email inválido', () => {
    cy.get('#email').type('email_invalido');
    cy.get('#password').type('12345');
    cy.get('button[type="submit"]').click();

    cy.get('#email').next('small').should('contain', 'Formato de email inválido');
    cy.location('pathname').should('include', '/index.html'); // ainda na login
  });

  it('deve logar com sucesso e redirecionar para o dashboard', () => {
    cy.get('#email').type('teste@exemplo.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();

    cy.location('pathname').should('include', '/dashboard.html');
    cy.contains('h1', 'Bem-vindo(a) ao Dashboard!').should('be.visible');
    cy.contains('p', 'Login realizado com sucesso.').should('be.visible');
  });
});
