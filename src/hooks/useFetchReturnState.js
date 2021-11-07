import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useFetchReturnState = (fetchReq, fetchParam, storeKey) => {
  const stateRedux = useSelector((state) => state);
  const store = stateRedux[storeKey];
  const loading = useSelector((state) => state.loading);
  const [resp, setRep] = useState(store);
  const dispatch = useDispatch();
  const getResp = useCallback(async () => {
    if (store.length) return;
    await dispatch(fetchReq(fetchParam));
  }, []);

  useEffect(() => {
    setRep(store);
  }, [loading]);

  useEffect(() => { getResp(); }, []);

  return [resp];
};

export default useFetchReturnState;
