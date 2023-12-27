
## Installation

To install `qbuild`, please follow these steps:

1. Run the following command to install the `qbuild` Python package using pip:
   ```
   $ pip install qbuild
   ```

2. Afterward, navigate to the 'src' folder and install the necessary dependency packages by running the following command:
   ```
   $ npm install
   ```

## Test Configuration

To create tests for your application, proceed with the following steps:

1. Navigate to the root project directory.

2. Access the 'src/__tests__/' directory and open the 'App.test.tsx' file.

3. Within the 'App.test.tsx' file, write your test cases based on your exercise. Ensure that you name your test cases according to the names specified in the 'tester_config.json' file. For example:

   **tester_config.json**
   ```json
   "tests": [
       "should increment"
   ]
   ```

   **App.test.tsx**
   ```jsx
   test('should increment', () => {
     render(<App />);
     const button = screen.getByRole("button")
     expect(button).toBeInTheDocument();

     expect(button).toHaveTextContent(/0 times/);
     fireEvent.click(button)
     expect(button).toHaveTextContent(/1 times/);
     fireEvent.click(button)
     expect(button).toHaveTextContent(/2 times/);
     fireEvent.click(button)
     expect(button).toHaveTextContent(/3 times/);
   });
   ```

## Building the Exercise

To build the app in the qbuild format, follow these steps:

1. Utilize `qbuild` for the task.

2. In the main project, use the following command to initiate the build process:
   ```
   qbuild
   ```

3. After completing the build, the results will be stored in a folder named `dist`.

### Dist Folder

The `dist` folder contains the following:

- **Model Solution:** This folder holds the answers to the exercises you've created. Submitting this will yield a score of 100.

- **Test:** Inside this folder, you will find the test files necessary for checking submissions.

- **`project_name`:** This folder represents the initial project that users will download to complete the tasks.

