import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import getJsonFile from '../utils/get-json-file';
import { UserBalance } from '../types';
import { extractUserBalances } from '../utils/balance';
import styles from '../styles/pages/home.module.scss';
import Container from '../components/container';
import Transactions from '../components/transactions';
import Input from '../components/input';
import Button from '../components/button';

const BASE_FILE_URL = '../mock-datas/transactions.json';

const Home: NextPage = () => {
  const [userBalances, setUserBalances] = useState<Record<string, UserBalance>>({});
  const [jsonUrl, setJsonUrl] = useState(BASE_FILE_URL);

  const handleSetBalances = async (url: string) => {
    try {
      const response = await getJsonFile(url);
      setUserBalances(extractUserBalances(response));
    } catch (e) {
      alert('Enter a valid json file url');
    }
  };

  useEffect(() => {
    handleSetBalances(jsonUrl);
  }, []);

  return (
    <Container>
      <div>
        <div className={styles.inputGroup}>
          <Input
            placeholder="Please enter a valid url"
            value={jsonUrl}
            onChange={(e) => setJsonUrl(e.target.value)}
          />
          <Button onClick={() => handleSetBalances(jsonUrl)}>Fetch</Button>
          <Button
            className={styles.defaultButton}
            onClick={() => {
              handleSetBalances(BASE_FILE_URL);
              setJsonUrl(BASE_FILE_URL);
            }}
          >
            Default Data
          </Button>
        </div>
        <Transactions userBalances={userBalances} />
      </div>
    </Container>
  );
};

export default Home;
