# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!

# Quick Start

Fork the repository, clone it to your local system, then:

## Install dependencies

yarn (or npm install)

## Start development server

yarn dev (or npm run dev)

## Quick Notes

To run the tests run `yarn test` (I left it in watch mode for the pairing exercise)

- I decided to toggle (select/deselect) an item when clicking on it from the Sidebar, as it felt more natural.
- When testing the Sidebar, I had to use a dirty trick with the callback `onItemsFetched` to save time, but that is only a hack and not the proper way to deal with asynchronisity.
- The App component need to more unit tests, such as testing when an item is been toggled from the sidebar to the menu and when it is removed from the menu.
- The App component is holding the selected items just for simplicity, as in production, the application state will be managed by Redux or similar.
- The Accessibility and Security was skipped to save time.
- For Optimisation, some components should have been memoized (eg. using PureComponent/React.memo) but was running out of time.
- The Sidebar component is not implementing any error states at the moment.
- There are no ErrorBoundaries at the moment.
