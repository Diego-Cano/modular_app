# modular_app
 web app class

 To start app: 

 Ensure that you are on the correct directory and run npm start.

 React Application Report

File Structure:

Usual React file structure. I created a components folder within the src folder. It contains the following files:

•	Header (default import)
•	ContentA (named import)
•	ContentB (named import)
•	SharedComponents (named import)
•	Footer (default import)

Default Exports/Imports:

Used for Header and Footer components.
Ideal for components that are the primary export of a file, or when a file exports a single component. This makes imports slightly cleaner when only one import is needed from a file.


Named Exports/Imports:

Used for ContentA, ContentB, and Button components.
Suitable for files exporting multiple entities, such as multiple components or a mix of components, constants, and utilities. This approach keeps imports explicit and supports selective importing.



