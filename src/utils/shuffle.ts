/**
 * Source: https://stackoverflow.com/a/2450976
 * 
 * @param array 
 * @returns 
 */
export default function shuffle(array: any[]) {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}