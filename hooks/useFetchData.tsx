import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  collection,
  serverTimestamp,
  query,
  orderBy,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { db } from '../firebaseConfig';

export const useFetchData = () => {
  const [data, setData] = useState('');
  const [fetchErr, setFetchErr] = useState('');

  const onClickTest = async () => {
    setFetchErr('');
    const q = query(
      collection(db, 'cities', 'LA'),
      orderBy('createdAt', 'desc'),
    );
    try {
      const d = await getDocs(q);
      setData('');
    } catch (err: any) {
      setFetchErr(err.message);
    }
  };
  return {
    onClickTest,
    data,
    fetchErr,
  };
};
