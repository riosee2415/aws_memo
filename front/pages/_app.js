import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";

const AwsMemo = ({ Component }) => {
  return (
    <>
      <Head>
        <title>AWS_MEMO</title>
      </Head>

      <Component />
    </>
  );
};

export default AwsMemo;
