import React from 'react';

interface IAutoSave<T> {
  store: IStorableItems<T>;
  initialValue: T;
}

type TGetItem<T> = ()  => T | null | undefined;
type TSetItem<T> = (value: T) => void;
type TRemoveItem = () => void;

export interface IStorableItems<T> {
  getItem: TGetItem<T>;
  setItem: TSetItem<T>;
  removeItem: TRemoveItem;
}

export type TUseAutoSave<T> = [T, (action: T | ((prevState: T) => T)) => void, TRemoveItem];

const useAutoSave = <T>({ store, initialValue }: IAutoSave<T>): TUseAutoSave<T> => {

  const getSavedItem = (): T => {
    const savedValue = store.getItem();
    if (savedValue && savedValue !== null) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  };

  const [value, setValue] = React.useState<T>(() => getSavedItem());

  React.useEffect(() => {
    store.setItem(value);
  }, [store, value]);

  return [value, setValue, store.removeItem];
};

export default useAutoSave;
