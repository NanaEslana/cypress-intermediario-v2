declare global {
    namespace Cypress {
        interface Chainable {

            /**
             * Custom command to login in application.
             * @example cy.login()
             * @author Eslana Regina
             */
            login(): Chainable<void>

            /**
             * command to exit user profile.
             * @example logout()
             * @author Eslana Regina
             */
            logout(): Chainable<void>

            /**
             * command to create new project.
             * @example gui_createProject()
             * @author Eslana Regina
             */
            gui_createProject(): Chainable<void>
        }
    }
}