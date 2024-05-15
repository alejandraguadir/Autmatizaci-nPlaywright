export function generateUniqueRandomNumbers(min: number, max: number, count: number): number[] {
  const uniqueNumbers = new Set<number>();
  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
}