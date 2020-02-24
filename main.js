const deck = [
  "6",
  "5",
  "8",
  "6",
  "6",
  "4",
  "11",
  "6",
  "12",
  "12",
  "3",
  "11",
  "3",
  "10",
  "5",
  "12",
  "1",
  "2",
  "7",
  "11",
  "10",
  "7",
  "8",
  "4",
  "2",
  "1",
  "3",
  "8",
  "12",
  "10",
  "3",
  "7",
  "7",
  "5",
  "4",
  "2",
  "4",
  "5",
  "11",
  "9",
  "9",
  "10",
  "9",
  "9",
  "2",
  "8",
  "1",
  "1"
];

//doesn't work because of strings.
//function compare(a, b) {
//  if (a < b) {
//    return -1;
//  }
//  if (a > b) {
//    return 1;
//  }
//  return 0;
//}

function compare(a, b) {
  return a - b
}

deck.sort(compare);
/*
Sort the deck of cards so that it becomes [1,1,1,1,2,2...]
*/
