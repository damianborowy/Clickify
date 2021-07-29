/**
 * Source: https://stackoverflow.com/a/2450976
 *
 * @param array
 * @returns shuffled array
 */
export default function shuffle<T>(array: T[]): T[] {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
