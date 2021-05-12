import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../../components/Layout";
import WordCloud from "../../components/WordCloud";
import api from "../../services/api";
import WordsParams from "../../services/interfaces";

const WordCloudPage = () => {
  const [data, setData] = useState<WordsParams>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    api.findWordsById(id).then((data) => setData(data));
  }, [id]);

  return (
    <Layout>
      {data && <WordCloud all={data?.all} arrWithCount={data.arrWithCount} />}
    </Layout>
  );
};

export default WordCloudPage;
