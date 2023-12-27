## Installation
For installing qbuild, run the following command:
```
$ pip install qbuild
```

then after that, in src foolder to install dependecy pacakges run the following command :
```
$ npm install
```

## test configuration
to create a tests in app , you should go into the root project and then src/__tests__/App.test.tsx
in this file you should write your test cases base on your exercise 
remember: base on your test case names in your tester_config.json you should put the name of the each test the name you have choose in that file
for example 

```tester_config.json
"tests": [
				"should increment"
],
```

```App.test.tsx
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
