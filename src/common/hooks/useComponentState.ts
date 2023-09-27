import { IComponentState } from 'common/types/componentState';
import { useEffect, useState } from 'react';

export const useComponentState = (
  complete: IComponentState['complete'],
  loading: IComponentState['loading'],
  error: IComponentState['error']
) => {
  const [componentState, setComponentState] = useState<{
    content: boolean;
    error: boolean | null;
    loading: boolean;
  }>({
    content: false,
    error: null,
    loading: false,
  });

  useEffect(() => {
    handleState();
  }, [complete, loading, error]);

  function handleState() {
    setComponentState({
      content: complete === true && loading === false && error === null,
      error: error !== null && loading === false,
      loading: loading === true && error === null,
    });
  }
  return [componentState];
};
