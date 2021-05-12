export default interface WordsParams {
  arrWithCount: {
    word: string;
    count: number;
  }[];
  all: number;
  id?: string;
}
