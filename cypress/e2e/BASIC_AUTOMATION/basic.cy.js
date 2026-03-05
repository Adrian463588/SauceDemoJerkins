describe('Basic Selector & Actions - Sauce Demo', () => {
    
 // 1. Visit Page (cy.visit)

    describe('1. Visit Page (cy.visit)', () => {
        it('should visit the login page (homepage', () => {
            cy.visit('https://www.saucedemo.com/');
            cy.url().should('include', 'saucedemo.com');
        })

        it('should visit the inventory page (After Login)   ', () => {
            cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            cy.location('pathname').should('eq', '/inventory.html');
        })

        it('should visit the cart page (After Login)   ', () => {
            cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            cy.get('#shopping_cart_container').click();
            cy.location('pathname').should('eq', '/cart.html');
        })

        //2. Cy.get mengambil element

        describe('Basic Selector & Actions - Sauce Demo', () => {

            beforeEach(() => {
                cy.visit('https://www.saucedemo.com/');
            })

            it('get element by ID -> #user-name', () => {
                cy.get('#user-name').should('exist');
            })

            it('get element by Class -> .login_container', () => {
                cy.get('.login_container').should('be.visible');
            })

            it('get element by Tag -> input', () => {
                cy.get('input').should('exist');
            })

            it('get element by Attribute -> input[type="password"]', () => {
                cy.get('[type="password"]').should('exist');
            })

            it('get element by Combined selector -> input#user-name', () => {
                cy.get('input#user-name').should('exist');
            })
            
            it('get element by Text -> cy.contains', () => {
                cy.contains('Swag Labs').should('be.visible');
                cy.contains('Login').should('exist');
            })
            
            
        })


        // 3. Type Text - Mengetik Input Field
        describe('3. Type Text - Mengetik di Input Field', () => {
            beforeEach(() => {
                cy.visit('https://www.saucedemo.com/');
            })


            it('Should type username into username field', () => {
                cy.get('#user-name').type('standard_user')
                .should('have.value', 'standard_user');
            })

            it('Should type password into password field', () => {
                cy.get('#password').type('secret_sauce')
                .should('have.value', 'secret_sauce');
            })

            it('Should clear field and retype username', () => {
                cy.get('#user-name')
                .type('wrong_user')
                .clear()
                .type('standard_user')
                .should('have.value', 'standard_user');
            })

            it('Should clear field and retype password', () => {
                cy.get('#password').clear()
                .type('secret_sauce')
                .should('have.value', 'secret_sauce');
            })
        })

    })

})

