// Helper for checkWinner
const checkLine = (a, b, c) => {
  return a === b && b === c && a !== '';
};

const checkWinner = (board) => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (checkLine(board[i][0], board[i][1], board[i][2])) {
      return board[i][0]; // Returns row winner
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (checkLine(board[0][i], board[1][i], board[2][i])) {
      return board[0][i]; // Returns column winner
    }
  }
  // Check diagonals
  if (checkLine(board[0][0], board[1][1], board[2][2])) {
    return board[0][0]; // Returns diagonal winner from top left corner to right bottom corner
  }
  if (checkLine(board[0][2], board[1][1], board[2][0])) {
    return board[0][2]; // Returns diagonal winner from top right corner to left bottom corner
  }
  return null;
};

const isBoardFull = (board) => {
  for (let i = 0; i < 3; i++) {
    if (board[i].includes('')) {
      return false; // Returns false if board isn't full
    }
  }
  return true; // Returns true if board is full
};

// Helper for validateInputs - allowed characters schema
const isValueValid = (value) => {
  return value === 'X' || value === 'O' || value === '';
};

// Check if inputs are valid
const validateInputs = (inputs) => {
  for (const input of inputs) {
    if (!isValueValid(input)) {
      return false; // Returns false if any input is invalid
    }
  }
  return true; // Returns true if inputs are valid
};

const parseBoard = () => {
  // Cleans the results div on every call
  document.getElementById('results').textContent = '';
  // Gets the values for each input
  const inputA1 = document.getElementById('a1').value.toUpperCase();
  const inputA2 = document.getElementById('a2').value.toUpperCase();
  const inputA3 = document.getElementById('a3').value.toUpperCase();
  const inputB1 = document.getElementById('b1').value.toUpperCase();
  const inputB2 = document.getElementById('b2').value.toUpperCase();
  const inputB3 = document.getElementById('b3').value.toUpperCase();
  const inputC1 = document.getElementById('c1').value.toUpperCase();
  const inputC2 = document.getElementById('c2').value.toUpperCase();
  const inputC3 = document.getElementById('c3').value.toUpperCase();

  const inputs = [
    inputA1,
    inputA2,
    inputA3,
    inputB1,
    inputB2,
    inputB3,
    inputC1,
    inputC2,
    inputC3,
  ];

  // Check if input values contains only X or O characters
  if (!validateInputs(inputs)) {
    document
      .getElementById('results')
      .insertAdjacentHTML(
        'afterbegin',
        `<p>Only 'X' or 'O' are allowed to be placed on the board</p>`
      );
    return;
  }

  // Create game board
  const board = [
    [inputA1, inputA2, inputA3],
    [inputB1, inputB2, inputB3],
    [inputC1, inputC2, inputC3],
  ];

  // Check the results
  const winner = checkWinner(board);

  if (winner) {
    document
      .getElementById('results')
      .insertAdjacentHTML('afterbegin', `<p>Winner: ${winner}</p>`);
  } else if (isBoardFull(board)) {
    document
      .getElementById('results')
      .insertAdjacentHTML('afterbegin', `<p>It's a draw</p>`);
  } else {
    document
      .getElementById('results')
      .insertAdjacentHTML('afterbegin', '<p>Game is still ongoing</p>');
  }
};
