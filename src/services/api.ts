import WordsParams from "./interfaces";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://word-cloud-api.herokuapp.com/";

const headers = new Headers({ "Content-Type": "application/json" });

const api = {
  async findWordsById(id: string) {
    return new Promise<WordsParams>((resolve, reject) => {
      fetch(`${baseURL}/word-cloud/${id}`, {
        method: "GET",
        headers,
      })
        .then((response) => {
          response.json().then((res) => resolve(res));
        })
        .catch(reject);
    });
  },

  async postWords(data: WordsParams): Promise<boolean> {
    return new Promise((resolve, reject) => {
      fetch(`${baseURL}/word-cloud`, {
        method: "POST",
        body: JSON.stringify({
          ...data,
        }),
        headers,
      })
        .then((response) => {
          if (response.ok && response.status === 200) {
            resolve(true);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default api;
