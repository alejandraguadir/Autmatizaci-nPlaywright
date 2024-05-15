export function extractIntegers(input: string): number {
    let integersBuilder: string = '';
  
    for (let i = 0; i < input.length; i++) {
      const c: string = input.charAt(i);
  
      if (!isNaN(parseInt(c))) {
        integersBuilder += c;
      }
    }
  
    return parseInt(integersBuilder);
  }